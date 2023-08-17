import React, { useState } from 'react';
import { useForm, useStep } from 'react-hooks-helper'
import FormListing from './FormListing';
import ConfirmListings from './ConfirmListings';
import Success from './Success';
import { CssBaseline, ThemeProvider } from '@mui/material';

const defaultData = {
    // step: 1,
    name: '',
    address: '',
    description: '',
    location: '',
    photos: {},
}
// const { step } = formData; 
const { name, address, description, location, photos } = formData;
const values = { name, address, description, location, photos };

const steps = [
    { id: 'formlisting' },
    { id: 'confirmlisting' },
    { id: 'success' },
]

const UserForm = ({ handleChange }) => {
    const [formData, setFormData] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    })
    console.log(step)

    // Proceed to the next step
    // const nextStep = () => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         step: prevState.step + 1,
    //     }));
    // };

    // Handle fields change
    const handleChange = (input) => (e) => {
        setFormData((prevState) => ({ ...prevState, [input]: e.target.value }));
    };


    const continueHandler = (e) => {
        e.preventDefault();
        nextStep();
    };




    switch (step.id) {
        case 'formlisting':
            return <FormListing
                nextStep={nextStep}
                handleChange={handleChange}
                values={values}
            />
        case 'confirmlisting':
            return
            <ConfirmListings nextStep={nextStep} values={values} />
        case 'success':
            return
            <Success />
    }

    const theme = {}
    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}

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