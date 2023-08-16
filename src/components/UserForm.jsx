import React, { useState } from 'react';
import FormListing from './FormListing';
import ConfirmListings from './ConfirmListings';
import Success from './Success';
import { CssBaseline, ThemeProvider } from '@mui/material';

const UserForm = ({ handleChange }) => {
    const [formData, setFormData] = useState({
        step: 1,
        name: '',
        address: '',
        description: '',
        location: '',
        photos: {},
    });

    const steps = [
        { id: 'formlisting' },
        { id: 'formlisting' },
    ]

    // Proceed to the next step
    const nextStep = () => {
        setFormData((prevState) => ({
            ...prevState,
            step: prevState.step + 1,
        }));
    };

    // Handle fields change
    const handleChange = (input) => (e) => {
        setFormData((prevState) => ({ ...prevState, [input]: e.target.value }));
    };


    const continueHandler = (e) => {
        e.preventDefault();
        nextStep();
    };

    const { step } = formData;
    const { name, address, description, location, photos } = formData;
    const values = { name, address, description, location, photos };
    const theme = {}
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {step === 1 && (
                <FormListing
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )}
            {step === 2 && <ConfirmListings nextStep={nextStep} values={values} />}
            {step === 3 && <Success />}
        </ThemeProvider>
    );
};


export default UserForm;

{/* // switch (step) {
//     case 1:
//         return (
//             <FormListing
//                 nextStep={nextStep}
//                 handleChange={handleChange}
//                 values={values}
//             />
//         );
//     case 2:
//         return <Confirm nextStep={nextStep} values={values} />;
//     case 3:
//         return <Success />;
//     default:
//         return null; // You might want to handle this differently based on your use case
// } */}