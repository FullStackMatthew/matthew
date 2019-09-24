import React, { useState } from 'react';
import clsx from 'clsx';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from '../../../../components/data-table/DataTable';
import { measureUnitCategory, deleteMeasureUnitCategory, insertMeasureUnitCategory, updateMeasureUnitCategory } from '../../graphQL/MeasureUnitCategory';

import MachineUnitCategoryForm from './MachineUnitCategoryForm';

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
export default function MachineUnitCategory(props) {
    const classes = useStyles();
    const [edit, setEdit] = useState(false);
    const [values, setValues] = useState(null);
    const [delete_measure_unit_category] = useMutation(deleteMeasureUnitCategory,
        {
            onCompleted(result) {
                refetch();
            },
            onError(error) {
                console.log("delete error", error);
            }
        }
    );
    const [insert_measure_unit_category] = useMutation(insertMeasureUnitCategory,
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

    const [update_measure_unit_category] = useMutation(updateMeasureUnitCategory,
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

    const { data, loading, error, refetch } = useQuery(measureUnitCategory);
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
        delete_measure_unit_category({ variables: { id: item.id } });
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
                    <DataTable columns={columns} data={data.measure_unit_category} onUpdate={onUpdate} onDelete={onDelete} />
                    :
                    <MachineUnitCategoryForm newItem onAdd={insert_measure_unit_category} onUpdate={update_measure_unit_category} onCancel={stopEdit} values={values}/>
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
