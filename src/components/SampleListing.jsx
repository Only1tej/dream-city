import React, { useState } from 'react'
import { Container, TextField, Button, FormLabel, FormControl, FormControlLabel, FormHelperText, FormGroup, InputLabel, OutlinedInput, InputAdornment, Checkbox } from '@material-ui/core'

const SampleListing = ({ formData, setForm, navigation }) => {

    // const [state, setState] = useState({
    //     certificateOfO: false,
    //     lawDeed: false,
    //     agreement: false,
    //     lease: false,
    //     rent: false,
    //     sale: false,
    //     isGated: false,
    //     isCctv: false,
    //     isSecurityPersonnel: false,
    //     isGarage: false,
    //     initialDeposit: '',
    //     duration: ''
    // });
    console.log('formData :>> ', formData);

    const [selectedButton, setSelectedButton] = useState(null);

    // const setForm = (e) => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.checked,
    //     }));
    //     let boolean = null
    //     if (e.target.value === 'true') {
    //         boolean = true
    //     }
    //     if (e.target.value === 'false') {
    //         boolean = false
    //     }
    // };

    // const { certificateOfO, lawDeed, agreement, lease, rent, sale, isGated, isCctv, isSecurityPersonnel, isGarage, initialDeposit, duration } = state;

    const { landmark, price, plots, paymentFormat, apartment, amenities, installment, outright, document, purchaseType, certificateOfO, lawDeed, agreement, lease, rent, sale, isGated, isCctv, isSecurityPersonnel, isGarage, initialDeposit, duration } = formData

    return (
        <Container maxWidth='xs'>
            <h3>Names</h3>
            <TextField
                label='Price'
                name='price'
                value={price}
                onChange={setForm}
                type='number'
                placeholder='Price'
                margin='normal'
                autoComplete='off'
                variant='outlined'
                fullWidth
                id="outlined-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start">&#x20A6;</InputAdornment>,
                }}
            />
            <TextField
                label='Landmark'
                name='landmark'
                value={landmark}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Plots'
                name='plots'
                value={plots}
                onChange={setForm}
                type='number'
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Payment Format'
                name='paymentFormat'
                value={paymentFormat}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Apartment'
                name='apartment'
                type='number'
                value={apartment}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <FormControl component="fieldset">
                <FormLabel>Amenities</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={isGated} onChange={setForm} name="isGated" />
                        }
                        label="Gate"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={isCctv} onChange={setForm} name="isCctv" />
                        }
                        label="CCTV"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={isSecurityPersonnel} onChange={setForm} name="isSecurityPersonnel" />
                        }
                        label="Security Personnel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={isGarage} onChange={setForm} name="isGarage" />
                        }
                        label="Garage"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            <div className='space-x-4 my-4'>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSelectedButton('installment')}
                >
                    Installment
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSelectedButton('outright')}
                >
                    Outright
                </Button>
                {selectedButton === 'installment' && (
                    <div className="mt-4">
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Initial Deposit</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">&#x20A6;</InputAdornment>}
                                label="Amount"
                            />
                            <TextField
                                label='Duration'
                                name='duration'
                                value={duration}
                                onChange={setForm}
                                margin='normal'
                                variant='outlined'
                                autoComplete='off'
                                fullWidth
                            />
                        </FormControl>
                    </div>
                )}
            </div>
            {/* //Document */}
            <FormControl component="fieldset">
                <FormLabel>Documents</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={certificateOfO} onChange={setForm} name="certificateOfO" />
                        }
                        label="Certificate of Ownership"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={lawDeed} onChange={setForm} name="lawDeed" />
                        }
                        label="Law Of Deed"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={agreement} onChange={setForm} name="agreement" />
                        }
                        label="Agreement"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel>Purchase Type</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={lease} onChange={setForm} name="lease" />
                        }
                        label="Lease"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={rent} onChange={setForm} name="rent" />
                        }
                        label="Rent"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={sale} onChange={setForm} name="sale" />
                        }
                        label="Sale"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            <Button variant='contained' fullWidth color='primary' style={{ marginTop: '1rem' }} onClick={() => navigation.previous()}>
                Back
            </Button>
            <Button variant='contained' fullWidth color='primary' style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
                Next
            </Button>
        </Container >
    )
}

export default SampleListing