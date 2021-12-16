import React from 'react'
import {Paper, TextField} from "@mui/material"
import SearchBar from '../searchBar/SearchBar'
import TablePy from '../table/TablePy'
import "./Main.css"


// sx={{height:1/2}}
function Main() {
    return (
        <Paper elevation={8} >
            <SearchBar/>
            <TablePy/>
        </Paper>
    )
}

export default Main
