import React, { useState } from 'react'
import { Paper, Dialog, DialogTitle } from "@mui/material"
import SearchBar from '../searchBar/SearchBar'
import TablePy from '../table/TablePy'
import "./Main.css"
import CreateIssue from '../createIssue/CreateIssue'


function Main() {

    const [open, setOpen] = useState(false)
    const [issue, setIssue] = useState([])
    const handleClick = (event) => {
        if (event.id) {
            setIssue(event)
        }
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
        setIssue([])
    }

    return (
        <Paper elevation={8} >
            <SearchBar />
            <TablePy handleClick={handleClick} handleClose={handleClose} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{issue!=0?`Issue id: ${issue.id}`:"Add new Issue"}</DialogTitle>
                <CreateIssue handleClose={handleClose} issue={issue}/>
            </Dialog>


        </Paper>
    )
}

export default Main
