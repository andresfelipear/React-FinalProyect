import {TableHead, TableRow, TableCell, TableSortLabel, Box} from "@mui/material"
import { visuallyHidden } from '@mui/utils';

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
        id: 'created at',
        label: 'Created at',
    },
    {
        id: 'updated at',
        label: 'Updated at',
    },
];

function TableHeadSort(props) {
    const {order, orderBy, onRequestSort } = props;
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
            </TableRow>
        </TableHead>
    );
}

export default TableHeadSort