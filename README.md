# React-Final Proyect

## Add MUI
npm install @mui/material @emotion/react @emotion/styled

## Add Icons materialize
npm install @mui/icons-material

## Slice the data for show correct in the UI
```
rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
```

### Also is necessary use a "handleChangePage" & "handleChangeRowsPerPage"

```
<TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
/>
```

## Use Dialog mui
```
import { Dialog, DialogTitle } from "@mui/material"
<Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new Issue</DialogTitle>
                <FormComponent handleClose={handleClose} />
</Dialog>
```

## Getting form data: react-hook-form
```
import { Controller, useForm } from "react-hook-form";

const { handleSubmit, reset, control } = useForm();
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
```

### Controller save the data and send this with the callback function "handleSubmit" using a button
```
<Button onClick={handleSubmit(onSubmit)}>Save</Button>


const onSubmit = (data) => {
        console.log(data)
        // dispatch()

    }
```