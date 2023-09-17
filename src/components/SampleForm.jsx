import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import FormListing from './FormListing'
import ConfirmListings from './ConfirmListings'
import Success from './Success'
import SampleFirst from './SampleFirst'
import SampleListing from './SampleListing'
import SampleSuccess from './SampleSuccess'
import SampleSubmit from './SampleSubmit'
import SampleFirstSubmit from './Listings'

const defaultData = {
    name: '',
    address: '',
    description: '',
    location: '',
    price: '',
    landmark: '',
    payment: '',
    paymentFormat: '',
    plots: '',
    apartment: '',
    initialDeposit: '',
    duration: '',
    outright: '',
    isGated: false,
    isCctv: false,
    isSecurityPersonnel: false,
    isGarage: false,
    certificateOfO: false,
    lawDeed: false,
    agreement: false,
    rent: false,
    lease: false,
    sale: false,

}

// const steps = [
//     { id: 'formListing' },
//     { id: 'confirmListings' },
//     { id: 'success' },
// ]
const steps = [
    { id: 'names' },
    { id: 'details' },
    { id: 'success' },
    { id: 'submit' },
]

function SampleForm() {
    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case 'names':
            return <SampleFirst {...props} />
        case 'details':
            return <SampleFirstSubmit {...props} />
        // return <SampleListing {...props} />
        case "success":
            return <SampleSuccess {...props} />
        case "submit":
            return <SampleSubmit {...props} />
    }
    console.log(step)
    return (
        <div>SampleForm</div>
    )
}

export default SampleForm;