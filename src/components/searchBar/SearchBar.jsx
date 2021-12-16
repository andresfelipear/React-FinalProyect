import React from 'react'
import { Container, TextField, Box } from "@mui/material"

function SearchBar() {
    const handleChange = () => {

    }
    return (
        <Container disableGutters>
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
