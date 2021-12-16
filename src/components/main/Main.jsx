import React from 'react'
import {Paper, TextField} from "@mui/material"
import SearchBar from '../searchBar/SearchBar'
import TablePy from '../table/TablePy'
import "./Main.css"

function Main() {
    return (
        <Paper elevation={8} sx={{height:1/2}}>
            <SearchBar/>
            <TablePy/>
        </Paper>
    )
}

export default Main
