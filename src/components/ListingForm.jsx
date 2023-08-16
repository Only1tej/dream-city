import React, { useState } from 'react';
import CreateListing from './CreateListing';
import Confirm from './Confirm';
import Success from './Success';

const ListingForm = () => {
    const [formData, setFormData] = useState({
        step: 1,
        name: '',
        address: '',
        photos: {},
    });

    // Handle field change
    const handleChange = (input) => (e) => {
        setFormData((prevState) => ({ ...prevState, [input]: e.target.value }));
    };

    // Proceed to the next step
    const nextStep = () => {
        setFormData((prevState) => ({
            ...prevState,
            step: prevState.step + 1,
        }));
    };

    const { step } = formData;
    const { name, address, photos } = formData;
    const values = { name, address, photos };

    switch (step) {
        case 1:
            return (
                <CreateListing
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            );
        case 2:
            return (
                <Confirm
                    nextStep={nextStep}
                    values={values}
                />
            );
        case 4:
            return <Success />;
        default:
            return null; // You might want to handle this differently based on your use case
    }
};

export default ListingForm;
