import React from 'react'
import { Container, TextField, Button, Box } from '@material-ui/core'
import { ThemeProvider } from "@mui/styles";
import { PrimaryMainTheme } from "./PrimaryMainTheme";

const SampleFirst = ({ formData, setForm, navigation }) => {
    const { name, address, description, location } = formData
    console.log('formData :>> ', formData);
    return (
        <ThemeProvider theme={PrimaryMainTheme} >
            <div className="hero min-h-screen bg-[#F5E0B8]">
                <Container maxWidth='xs' >
                    <h3 className='text-4xl font-primary font-bold text-[#008F97]'>Names</h3>
                    <TextField
                        label='Name'
                        name='name'
                        value={name}
                        onChange={setForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                        className="bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                    />
                    <TextField
                        label='Address'
                        name='address'
                        value={address}
                        onChange={setForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                    <TextField
                        label='Description'
                        name='description'
                        value={description}
                        onChange={setForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                    <TextField
                        label='Location'
                        name='location'
                        value={location}
                        onChange={setForm}
                        margin='normal'
                        variant='outlined'
                        autoComplete='off'
                        fullWidth
                    />
                    {/* <Button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" variant='contained' fullWidth color='#118286' style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
                        Next
                    </Button> */}
                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white w-full mt-6" onClick={() => navigation.next()}>Next</button>
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default SampleFirst

