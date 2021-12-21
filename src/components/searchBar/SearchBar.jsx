import React from 'react'
import { Container, TextField, Box } from "@mui/material"
import { useDispatch } from 'react-redux'
import {filter_issues} from "../../redux/actions"
import { useState } from 'react'
import { set } from 'react-hook-form'

function SearchBar() {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(filter_issues(e.target.value))
    }
    return (
        <Container disableGutters maxWidth="false" sx={{pb:2}} >
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="inputSearchBar"
                    label="Filter issues"
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    color="error"
                />
            </Box>
        </Container>

    )
}

export default SearchBar
