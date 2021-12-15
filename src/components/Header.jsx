import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Angular 9 MatTable CRUD Example
                    </Typography>

                    <Box>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Reload data:
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
