import React, { useState } from 'react'
import { Container, Box, TextField, Button, Stack } from "@mui/material"
import "./CreateIssue.css"
import { Controller, useForm } from "react-hook-form";

import { useDispatch, useSelector } from 'react-redux'
import { add_issue } from '../../redux/actions'


function CreateIssue(props) {
    const dispatch = useDispatch();

    //Controller
    const { handleSubmit, reset, control } = useForm();
    const bigData = useSelector(state => state.list)

    const [required, setRequired] = useState([
        { id: "id", helperText: true },
        { id: "title", helperText: true },
        { id: "state", helperText: true }
    ]);

    const onSubmit = (data) => {
        console.log(data)
        dispatch(add_issue(data))
        console.log(bigData);

    }


    const handleOnChange = (event) => {
        console.log("hola onchange");
        const value = event.target.value;
        const id = event.target.id;


        if (value !== "") {
            const other = required.slice(0);
            other.map((elem) => {
                if (elem.id === id) {
                    elem.helperText = false;
                }
            })
            setRequired(other)
        }
        else {
            const other = required.slice(0);
            other.map((elem) => {
                if (elem.id === id) {
                    elem.helperText = true;
                }
            })
            setRequired(other)
        }
    }
    return (
        <Container maxWidth="xs" sx={{}} >
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <Controller
                    name={"id"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="id"
                            label="Id"
                            variant="standard"
                            fullWidth
                            color="error"
                            required
                            autoFocus
                            helperText={required[0].helperText ? "Required field" : ""}
                            onChange={(event)=>{
                                handleOnChange(event);
                                onChange(event);
                            }}
                        />)}
                />

                <Controller
                    name={"title"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="title"
                            label="Title"
                            variant="standard"
                            fullWidth
                            color="error"
                            required
                            helperText={required[1].helperText ? "Required field" : ""}
                            onChange={(event)=>{
                                handleOnChange(event);
                                onChange(event);
                            }}
                        />
                    )}
                />

                <Controller
                    name={"state"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="state"
                            label="State"
                            variant="standard"
                            fullWidth
                            color="error"
                            required
                            helperText={required[2].helperText ? "Required field" : ""}
                            onChange={(event)=>{
                                handleOnChange(event);
                                onChange(event);
                            }}
                        />
                    )}
                />

                <Controller
                    name={"url"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="url"
                            label="Url"
                            variant="standard"
                            fullWidth
                            color="error"
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name={"created at"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="created at"
                            label="Created at"
                            variant="standard"
                            fullWidth
                            color="error"
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name={"updated at"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="update at"
                            label="Updated at"
                            variant="standard"
                            fullWidth
                            color="error"
                            onChange={onChange}
                        />
                    )}
                />

                <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                    <Button disabled={((!required[0].helperText && !required[1].helperText && !required[2].helperText)) ? false : true} variant="text" color="inherit" onClick={handleSubmit(onSubmit)}>Save</Button>
                    <Button variant="text" color="inherit" onClick={props.handleClose}>Cancel</Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default CreateIssue
