import React, { useState } from 'react'
import { Container, Box, TextField, Button, Stack } from "@mui/material"
import "./CreateIssue.css"
import { Controller, useForm } from "react-hook-form";

import { useDispatch} from 'react-redux'
import { add_issue, update_issue } from '../../redux/actions'


function CreateIssue(props) {
    const dispatch = useDispatch();
    const backupIssue = {
        id:"",
        title:"",
        url:"",
        state:"",
        created_at:"",
        updated_at:""
    }

    const issue= props.issue!=0?props.issue:backupIssue;

    //Controller
    const { handleSubmit, reset, control } = useForm();

    const [required, setRequired] = useState([
        { id: "id", helperText: issue.id?false:true },
        { id: "title", helperText: issue.id?false:true },
        { id: "state", helperText: issue.id?false:true }
    ]);

    const onSubmit = (data) => {
        
        if(issue.id){
            dispatch(update_issue(issue.id, data))
        }
        else{
            dispatch(add_issue(data))
        }
        props.handleClose()
    }


    const handleOnChange = (event) => {
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
                    defaultValue={issue.id}
                    render={({ field: { onChange, value} }) => (
                        <TextField
                            id="id"
                            label="Id"
                            variant="standard"
                            fullWidth
                            color="error"
                            required
                            autoFocus
                            value={value}
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
                    defaultValue={issue.title}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="title"
                            label="Title"
                            variant="standard"
                            fullWidth
                            color="error"
                            required
                            value={value}
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
                    defaultValue={issue.state}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="state"
                            label="State"
                            variant="standard"
                            fullWidth
                            color="error"
                            required
                            value={value}
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
                    defaultValue={issue.url}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="url"
                            label="Url"
                            variant="standard"
                            fullWidth
                            color="error"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name={"created_at"}
                    control={control}
                    defaultValue={issue.created_at}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="created_at"
                            label="Created at"
                            variant="standard"
                            fullWidth
                            color="error"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name={"updated_at"}
                    control={control}
                    defaultValue={issue.updated_at}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            id="update_at"
                            label="Updated at"
                            variant="standard"
                            fullWidth
                            color="error"
                            value={value}
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
