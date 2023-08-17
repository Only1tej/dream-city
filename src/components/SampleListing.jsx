import React, { useState } from 'react'
import { Container, TextField, Button, FormLabel, FormControl, FormControlLabel, FormHelperText, FormGroup, InputLabel, OutlinedInput, InputAdornment, Checkbox } from '@material-ui/core'

const SampleListing = ({ formData, setForm, navigation }) => {

    const [state, setState] = useState({
        certificateOfO: false,
        lawDeed: false,
        agreement: false,
        lease: false,
        rent: false,
        sale: false,
        isGated: false,
        isCctv: false,
        isSecurityPersonnel: false,
        isGarage: false,
        initialDeposit: '',
        duration: ''
    });

    const [selectedButton, setSelectedButton] = useState(null);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { certificateOfO, lawDeed, agreement, lease, rent, sale, isGated, isCctv, isSecurityPersonnel, isGarage, initialDeposit, duration } = state;

    const { landmark, price, plots, paymentFormat, apartment, amenities, installment, outright, document, purchaseType } = formData

    return (
        <Container maxWidth='xs'>
            <h3>Names</h3>
            <TextField
                label='Price'
                name='price'
                value={price}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Landmark'
                name='landmark'
                value={landmark}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Plots'
                name='plots'
                value={plots}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Payment Format'
                name='paymentFormat'
                value={paymentFormat}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Apartment'
                name='apartment'
                value={apartment}
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
                            <Checkbox checked={isGated} onChange={handleChange} name="isGated" />
                        }
                        label="Gate"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={isCctv} onChange={handleChange} name="isCctv" />
                        }
                        label="CCTV"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={isSecurityPersonnel} onChange={handleChange} name="isSecurityPersonnel" />
                        }
                        label="Security Personnel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={isGarage} onChange={handleChange} name="isGarage" />
                        }
                        label="Garage"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            {/* <TextField
                label='Installment'
                name='installment'
                value={installment}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            /> */}
            <div className='space-x-4 my-4'>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSelectedButton('outright')}
                >
                    Outright
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSelectedButton('installment')}
                >
                    Installment
                </Button>
                {selectedButton === 'outright' && (
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
                            <Checkbox checked={certificateOfO} onChange={handleChange} name="certificateOfO" />
                        }
                        label="Certificate of Ownership"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={lawDeed} onChange={handleChange} name="lawDeed" />
                        }
                        label="Law Of Deed"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={agreement} onChange={handleChange} name="agreement" />
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
                            <Checkbox checked={lease} onChange={handleChange} name="lease" />
                        }
                        label="Lease"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={rent} onChange={handleChange} name="rent" />
                        }
                        label="Rent"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={sale} onChange={handleChange} name="sale" />
                        }
                        label="Sale"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            <Button variant='contained' fullWidth color='primary' style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
                Next
            </Button>
        </Container >
    )
}

export default SampleListing