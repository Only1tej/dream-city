import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';

const ConfirmListings = ({ values, nextStep, prevStep }) => {
    const continueHandler = (e) => {
        e.preventDefault();
        // Process form (in case of backend)
        nextStep();
    };

    const backHandler = (e) => {
        e.preventDefault();
        prevStep();
    };

    const styles = {
        button: {
            margin: 15,
        },
    };

    // const values = { name, address, description, location, photos };

    const theme = {}

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position='static' title="Confirm User Data" />
            <List>
                <ListItem primaryText="Name" secondaryText={values.name} />
                <ListItem primaryText="Address" secondaryText={values.address} />
                <ListItem primaryText="Description" secondaryText={values.description} />
                <ListItem primaryText="Location" secondaryText={values.location} />
                <ListItem primaryText="Photos" secondaryText={values.photos} />
            </List>
            <br />
            <Button
                variant="contained"
                color="primary"
                style={styles.button}
                onClick={continueHandler}
            >
                Confirm & Continue
            </Button>
            <Button
                variant="contained"
                color="secondary"
                style={styles.button}
                onClick={backHandler}
            >
                Back
            </Button>
        </ThemeProvider >
    );
};

export default ConfirmListings;
