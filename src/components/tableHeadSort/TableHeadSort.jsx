import { TableHead, TableRow, TableCell, TableSortLabel, Box, IconButton } from "@mui/material"
import { visuallyHidden } from '@mui/utils';
import { Add } from "@mui/icons-material"

const headCells = [
    {
        id: 'id',
        label: 'Id',
    },
    {
        id: 'title',
        label: 'Title',
    },
    {
        id: 'state',
        label: 'State',
    },
    {
        id: 'url',
        label: 'Url',
    },
    {
        id: 'created_at',
        label: 'Created at',
    },
    {
        id: 'updated_at',
        label: 'Updated at',
    },
];

function TableHeadSort(props) {
    const { order, orderBy, onRequestSort, handleClick } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell>
                    <IconButton
                        size="large"
                        edge="start"
                        color="custom"
                        aria-label="add"
                        sx={{}}
                        onClick={handleClick}
                    >
                        <Add
                            
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default TableHeadSort