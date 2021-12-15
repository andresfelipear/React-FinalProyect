import React from 'react'
import "./Header.css"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';


import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({

    palette: {
        primary: {
            main: "#1976d2",
            custom: "#3f51b5",
        },
    },
});

function Header() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" className="main-header" sx={{ bgcolor: "primary.custom" }} >
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Angular 9 MatTable CRUD Example
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="HeaderRight">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Reload data:
                            </Typography>
                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="refresh"
                                sx={{ ml: 0.5 }}
                            >
                                <RefreshIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>

        </ThemeProvider>

    )
}

export default Header
