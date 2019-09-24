import React, { useState } from 'react';
import clsx from 'clsx';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from '../../../../components/data-table/DataTable';
import { machineFleet, deleteMachineFleet, insertMachineFleet, updateMachineFleet } from '../../graphQL/MachineFleet';

import MachineFleetForm from './MachineFleetForm';

import {
    Fab
}
    from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        maxHeight: '80%'
    },

    hide: {
        display: 'none'
    },

    fab: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    },
}));

/**
 * 
 * TODO: A new 'container' component needs to be created to manager the CRUD state (Editing or visualizing the data)
 */
export default function MachineFleet(props) {
    const classes = useStyles();
    const [edit, setEdit] = useState(false);
    const [values, setValues] = useState(null);
    const [delete_machine_fleet] = useMutation(deleteMachineFleet,
        {
            onCompleted(result) {
                refetch();
            },
            onError(error) {
                console.log("delete error", error);
            }
        }
    );
    const [insert_machine_fleet] = useMutation(insertMachineFleet,
        {
            onCompleted(result) {
                refetch();
                stopEdit();
            },
            onError(error) {
                console.log("insert error", error);
            }
        }
    );

    const [update_machine_fleet] = useMutation(updateMachineFleet,
        {
            onCompleted(result) {
                refetch();
                stopEdit();
            },
            onError(error) {
                console.log("update error", error);
            }
        }
    );

    const { data, loading, error, refetch } = useQuery(machineFleet);
    // const [showAdd, setShowAdd] = useState(false);

    if (loading) return <p>Loading....</p>
    if (error) return <p>ERROR: {error}</p>

    const columns = [
        { id: 'id', key: '#', width: 30 },
        { id: 'name', key: "Name", minWidth: 100 },
    ];

    const onUpdate = (item) => {
        setValues(item);
        setEdit(true);
    }

    const onDelete = (item) => {
        delete_machine_fleet({ variables: { id: item.id } });
    }

    const stopEdit = () => {
        setEdit(false);
    }

    const addNewItem = () => {
        setValues({});
        setEdit(true);
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                {!edit ?
                    <DataTable columns={columns} data={data.machine_fleet} onUpdate={onUpdate} onDelete={onDelete} />
                    :
                    <MachineFleetForm newItem onAdd={insert_machine_fleet} onUpdate={update_machine_fleet} onCancel={stopEdit} values={values}/>
                }
            </div>
            <Fab
                color="primary"
                aria-label="add"
                className={clsx(classes.fab, { [classes.hide]: !!edit })}
                onClick={addNewItem}
                to="/posts/new"
            >
                <AddIcon />
            </Fab>
        </React.Fragment>
    )
}
