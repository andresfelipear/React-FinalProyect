import React from 'react'
import { Container, Box, TextFields, Button } from "@mui/icons-material"

function CreateIssue() {
    return (
        <Container maxWidth="md" sx={{}} >
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="id"
                    label="Id"
                    variant="standard"
                    fullWidth
                    color="error"
                    required
                />
                <TextField
                    id="title"
                    label="title"
                    variant="standard"
                    fullWidth
                    color="error"
                    required
                />
                <TextField
                    id="state"
                    label="State"
                    variant="standard"
                    fullWidth
                    color="error"
                    required
                />
                <TextField
                    id="url"
                    label="Url"
                    variant="standard"
                    fullWidth
                    color="error"
                />
                <TextField
                    id="created at"
                    label="Created at"
                    variant="standard"
                    fullWidth
                    color="error"
                />

                <TextField
                    id="update at"
                    label="Updated at"
                    variant="standard"
                    fullWidth
                    color="error"
                />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button disable variant="text">Save</Button>
                    <Button  variant="text">Cancel</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default CreateIssue
