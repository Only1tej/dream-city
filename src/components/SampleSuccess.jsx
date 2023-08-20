import React from 'react'
import { Container, Button, Accordion, AccordionDetails, AccordionSummary, ListItemText, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SampleSuccess = ({ formData, navigation }) => {
    const { go } = navigation
    const {
        name,
        address,
        description,
        location,
        price,
        landmark,
        payment,
        paymentFormat,
        plots,
        apartment,
        initialDeposit,
        duration,
        outright,
        isGated,
        isCctv,
        isSecurityPersonnel,
        isGarage,
        certificateOfO,
        lawDeed,
        agreement,
        rent,
        lease,
        sale,
    } = formData
    return (
        <div className="hero min-h-screen bg-[#F5E0B8]">
            <Container>
                <h3 className='text-4xl font-primary font-bold text-[#008F97]'>Confirm</h3>
                <RenderAccordion summary='Names' go={go} details={[
                    { 'Name': name },
                    { 'Address': address },
                    { 'Description': description },
                    { 'Location': location },
                ]} />
                <RenderAccordion summary='Details' go={go} details={[
                    { 'Price': price },
                    { 'Landmark': landmark },
                    { 'Plots': plots },
                    { 'Apartment': apartment },
                    { 'Gate': isGated },
                    { 'Rent': rent },
                    { 'Sale': sale },
                    { 'Lease': lease },

                ]} />
                {/* <Button
                    color='primary'
                    variant='contained'
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => go('submit')}
                >
                    Submit
                </Button> */}
                <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white w-full mb-2 mt-6" onClick={() => go('submit')}>Submit</button>
            </Container>
        </div>
    )
}
export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
        <AccordionDetails>
            <div>
                {
                    details.map((data, index) => {
                        const objKey = Object.keys(data)[0]
                        const objValue = data[Object.keys(data)[0]]

                        return <ListItemText key={index}>
                            {
                                `${objKey}: ${objValue}`
                            }
                        </ListItemText>
                    })
                }
                <IconButton
                    color='primary'
                    component='span'
                    onClick={() => go(`${summary.toLowerCase()}`)}
                ><EditIcon /></IconButton>
            </div>
        </AccordionDetails>
    </Accordion>
)
export default SampleSuccess