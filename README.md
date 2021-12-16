# React-Final Proyect

## Add MUI
npm install @mui/material @emotion/react @emotion/styled

## Add Icons materialize
npm install @mui/icons-material

## Slice the data for show correct in the UI
rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

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