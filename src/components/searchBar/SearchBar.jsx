import React from 'react'
import { Container, TextField, Box } from "@mui/material"

function SearchBar() {
    const handleChange = () => {

    }
    return (
        <Container sx={{pt:1, pb:2}}>
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
                />
            </Box>
        </Container>

    )
}

export default SearchBar
