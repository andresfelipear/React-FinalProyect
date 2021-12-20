import React, { useState } from 'react'
import { Paper,  Dialog } from "@mui/material"
import SearchBar from '../searchBar/SearchBar'
import TablePy from '../table/TablePy'
import "./Main.css"
import CreateIssue from '../createIssue/CreateIssue'


function Main() {

    const [open, setOpen] = useState(false)
    const handleClick = (event) => {
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Paper elevation={8} >
            <SearchBar />
            <TablePy handleClick={handleClick} handleClose={handleClose} />
            <Dialog open={open} onClose={handleClose}>
                <CreateIssue handleClose={handleClose} />
            </Dialog>

        </Paper>
    )
}

export default Main
