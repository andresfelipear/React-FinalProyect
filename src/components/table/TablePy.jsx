import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    IconButton,
    Stack,
} from "@mui/material"
import { Edit, Delete } from "@mui/icons-material"
import "./TablePy.css"


import TableHeadSort from '../tableHeadSort/TableHeadSort';
import { useSelector, useDispatch } from 'react-redux'
import { delete_issue } from '../../redux/actions'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function TablePy(props) {
    const dispatch = useDispatch();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const data = useSelector(state => state.searchList==0?state.list:state.searchList);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

    }

    const handleDelete = (id) => {
        dispatch(delete_issue(id));
    }

    const handleUpdate = (issue) => {
        props.handleClick(issue)

    }


    return (
        <>
            <Table aria-label="simple table" >
                <TableHeadSort
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    handleClick={props.handleClick}
                />
                <TableBody>
                    {data.sort(getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((issue, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{issue.id}</TableCell>
                                    <TableCell>{issue.title}</TableCell>
                                    <TableCell>{issue.state}</TableCell>
                                    <TableCell>{issue.url}</TableCell>
                                    <TableCell>{issue.created_at}</TableCell>
                                    <TableCell>{issue.updated_at}</TableCell>
                                    <TableCell>
                                        <Stack direction="row">
                                            <IconButton
                                                size="large"
                                                aria-label="edit issue"
                                                color="error"
                                                onClick={() => { handleUpdate(issue) }}
                                            >
                                                <Edit />
                                            </IconButton>
                                            <IconButton
                                                size="large"
                                                aria-label="delete issue"
                                                color="error"
                                                onClick={() => { handleDelete(issue.id) }}
                                            >
                                                <Delete />

                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            )
                        })}

                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>

    )
}

export default TablePy
