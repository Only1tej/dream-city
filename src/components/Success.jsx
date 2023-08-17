import React from 'react';
import { ThemeProvider, CssBaseline, AppBar, Typography } from '@mui/material';

const Success = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" title="Success" />
            <Typography variant="h1">Thank you for your submission</Typography>
            <Typography variant="body1">You will get an email with further instructions</Typography>
        </ThemeProvider>
    );
};

const theme = {};

export default Success;