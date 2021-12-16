import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from "@mui/material"
import {Add} from "@mui/icons-material"
import "./TablePy.css"

function TablePy() {
    return (
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
                            sx={{ }}
                        >
                            <Add/>
                        </IconButton>
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}

export default TablePy
