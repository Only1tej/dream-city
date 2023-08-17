import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'

const SampleFirst = ({ formData, setForm, navigation }) => {
    const { name, address, description, location } = formData
    console.log('formData :>> ', formData);
    return (
        <Container maxWidth='xs'>
            <h3>Names</h3>
            <TextField
                label='Name'
                name='name'
                value={name}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
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
            <Button variant='contained' fullWidth color='primary' style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
                Next
            </Button>
        </Container>
    )
}

export default SampleFirst