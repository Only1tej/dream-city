import React from 'react'
import { Container, Accordion, AccordionDetails, AccordionSummary, ListItemText, IconButton, EditIcon } from '@mui/material'

const SampleSuccess = ({ formData, navigation }) => {
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
            <RenderAccordion summary='Details' details={[
                { 'Name': name },
                { 'Address': address },
                { 'Description': description },
                { 'Location': location },
            ]} />
        </Container>
    )
    //  address,
    //     description,
    //     location,
    //     price,
    //     landmark,
}
export const RenderAccordion = ({ summary, details }) => (
    <Accordion>
        <AccordionSummary>{summary}</AccordionSummary>
        <AccordionDetails>
            <div>
                {
                    details.map((data, index) => {
                        const objKey = Object.keys(data)[0]
                        const objValue = data[Object.keys(data)[0]]

                        return <ListItemText>
                            {
                                `${objKey}: ${objValue}`
                            }
                        </ListItemText>
                    })
                }
                <IconButton><EditIcon /></IconButton>
            </div>
        </AccordionDetails>
    </Accordion>
)
export default SampleSuccess