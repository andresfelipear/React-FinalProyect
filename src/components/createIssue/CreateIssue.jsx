import React, { useState } from 'react'
import { Container, Box, TextField, Button, Stack } from "@mui/material"
import "./CreateIssue.css"


function CreateIssue() {
    const [required, setRequired] = useState([
        { id: "id", helperText: true },
        { id: "title", helperText: true },
        { id: "state", helperText: true }
    ]);

    const handleOnChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        console.log(required[0].helperText)
     
        if (value !== "") {
            required.map((elem)=>{
                if(elem.id==id){
                    elem.helperText=false;
                }
            })
            setRequired(required)
        }
        else {
            required.map((elem)=>{
                if(elem.id==id){
                    elem.helperText=true;
                }
            })
            setRequired(required)
        }
    }
    return (
        <Container maxWidth="sm" sx={{}} >
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
                    autoFocus
                    helperText={required[0].helperText?"Required field":""}
                    onChange={handleOnChange}
                />
                <TextField
                    id="title"
                    label="title"
                    variant="standard"
                    fullWidth
                    color="error"
                    required
                    helperText={required[1].helperText?"Required field":""}
                    onChange={handleOnChange}
                />
                <TextField
                    id="state"
                    label="State"
                    variant="standard"
                    fullWidth
                    color="error"
                    required
                    helperText={required[2].helperText?"Required field":""}
                    onChange={handleOnChange}
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
                <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                    <Button disable="true" variant="text">Save</Button>
                    <Button variant="text">Cancel</Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default CreateIssue
