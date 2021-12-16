import React, { useEffect, useState } from 'react'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    IconButton,
    Box,
    TableSortLabel,
} from "@mui/material"
import { Add, Edit, Delete } from "@mui/icons-material"
import { visuallyHidden } from '@mui/utils';
import "./TablePy.css"


import ISSUES from '../../assets/issues'


function TablePy() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [data, setData] = useState(ISSUES);
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


    return (
        <>
            <Table aria-label="simple table" >
                <TableHead >
                    <TableRow >
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Url</TableCell>
                        <TableCell>Created at</TableCell>
                        <TableCell>Updated at</TableCell>
                        <TableCell>
                            <IconButton
                                size="large"
                                edge="start"
                                color="custom"
                                aria-label="refresh"
                                sx={{}}
                            >
                                <Add />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((issue, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{issue.id}</TableCell>
                                <TableCell>{issue.title}</TableCell>
                                <TableCell>{issue.state}</TableCell>
                                <TableCell>{issue.url}</TableCell>
                                <TableCell>{issue.updated_at}</TableCell>
                                <TableCell>{issue.created_at}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <IconButton size="large" aria-label="edit issue" color="error">
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            size="large"
                                            aria-label="delete issue"
                                            color="error"
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Box>
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
