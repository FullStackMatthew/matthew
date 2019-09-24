import React from 'react';
import { Translation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    TablePagination,
    // Menu,
    // MenuItem,
    // Fade,
} from '@material-ui/core';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
// import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 407,
        overflow: 'auto',
    },
    actionButtons: {
        marginRight: '5px'
    }
});

/**
 * 
 * TODO: Actions button need to be changed to a poupup menu. It isn't done because the click event is not taking the correct 'row' object. 
 */

export default function DataTable(props) {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const [actionMenuAnchorEl, setActionMenuAnchorEl] = React.useState(null);
    // const actionMenuOpened = Boolean(actionMenuAnchorEl);

    const columns = props.columns || [];
    const rows = props.data || [];

    const hasDelete = props.onDelete ? true : false;
    const hasUpdate = props.onUpdate ? true : false;
    const hasOptionMenu = (hasDelete || hasUpdate);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    // function handleActionMenuClick(event) {
    //     setActionMenuAnchorEl(event.currentTarget);
    // }
    // function handleActionMenuClose() {
    //     setActionMenuAnchorEl(null);
    // }

    function updateClick(item) {
        props.onUpdate(item);
        // handleActionMenuClose();
    }
    function deleteClick(item) {
        props.onDelete(item);
        // handleActionMenuClose();
    }

    return (

        <Translation>
            {
                (t) =>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        {columns.map(column => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {t(column.key)}
                                            </TableCell>
                                        ))}
                                        {!hasOptionMenu ? '' :
                                            <TableCell
                                                key="action_column"
                                                variant="head"
                                                align='right'
                                            >
                                                <span>{t('Action')}</span>
                                            </TableCell>
                                        }


                                    </TableRow>

                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {

                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {columns.map(column => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}

                                                {!hasOptionMenu ? '' :
                                                    <TableCell
                                                        variant="head"
                                                        align='right'
                                                        width='115px'>
                                                        {
                                                            !hasUpdate ? '' :
                                                                <IconButton
                                                                    edge="start"
                                                                    color="inherit"
                                                                    aria-label="menu"
                                                                    onClick={updateClick.bind(this, row)}
                                                                    className={classes.actionButtons}>
                                                                    <CreateIcon />
                                                                </IconButton>

                                                        }

                                                        {
                                                            !hasDelete ? '' :
                                                                <IconButton
                                                                    edge="start"
                                                                    color="inherit"
                                                                    aria-label="menu"
                                                                    onClick={deleteClick.bind(this, row)} >
                                                                    <DeleteIcon />
                                                                </IconButton>

                                                        }
                                                    </TableCell>

                                                    // <TableCell
                                                    //     variant="head"
                                                    //     align='right'
                                                    //     padding="checkbox"
                                                    //     key={row.id}
                                                    // >
                                                    //     <IconButton
                                                    //         edge="start"
                                                    //         color="inherit"
                                                    //         aria-label="menu"
                                                    //         onClick={handleActionMenuClick}>
                                                    //         <MoreVert />
                                                    //     </IconButton>

                                                    //     <Menu
                                                    //         id="long-menu"
                                                    //         anchorEl={actionMenuAnchorEl}
                                                    //         open={actionMenuOpened}
                                                    //         onClose={handleActionMenuClose}
                                                    //         TransitionComponent={Fade}
                                                    //     >
                                                    //         {!hasUpdate ? '' :
                                                    //             <MenuItem
                                                    //             key={`${row.id}-update`}
                                                    //             onClick={updateClick.bind(this, row)}>
                                                    //                 {t('Update')}
                                                    //             </MenuItem>
                                                    //         }
                                                    //         {!hasDelete ? '' :
                                                    //             <MenuItem
                                                    //                 key={`${row.id}-delete`}
                                                    //                 onClick={deleteClick.bind(this, row)}>
                                                    //                 {t('Delete')}
                                                    //             </MenuItem>
                                                    //         }

                                                    //     </Menu>

                                                    // </TableCell>

                                                }
                                            </TableRow>
                                        );
                                    })}

                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            labelRowsPerPage={t("Rows per page")}

                            backIconButtonProps={{
                                'aria-label': 'previous page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'next page',
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>

            }
        </Translation >
    );
}