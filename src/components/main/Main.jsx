import React from 'react'
import {Paper, TextField} from "@mui/material"
import SearchBar from '../searchBar/SearchBar'

function Main() {
    return (
        <Paper elevation={8} sx={{height:1/2}}>
            <SearchBar/>
        </Paper>
    )
}

export default Main
