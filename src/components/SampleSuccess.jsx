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
        <Container>
            <h3>Confirm</h3>
            <RenderAccordion summary='Details' go={go} details={[
                { 'Name': name },
                { 'Address': address },
                { 'Description': description },
                { 'Location': location },
                { 'Price': price },
                { 'Landmark': landmark },
                { 'Plots': plots },
                { 'Apartment': apartment },
                { 'Gate': isGated },
                { 'Rent': rent },
                { 'Sale': sale },
                { 'Lease': lease },

            ]} />
            <Button
                color='primary'
                variant='contained'
                style={{ marginTop: '1.5rem' }}
            >
                Submit
            </Button>
        </Container>
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