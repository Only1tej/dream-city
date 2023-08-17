import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import FormListing from './FormListing'
import ConfirmListings from './ConfirmListings'
import Success from './Success'
import SampleFirst from './SampleFirst'
import SampleListing from './SampleListing'
import SampleSuccess from './SampleSuccess'

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
    installment: [{
        initialDeposit: '',
        duration: ''
    }],
    outright: '',
    amenities: [{
        isGated: false, isCctv: false, isSecurityPersonnel: false, isGarage: false
    }],
    document: [{
        certificateOfO: false, lawDeed: false, agreement: false
    }],
    purchaseType: [{
        rent: false, lease: false, sale: false
    }],

}

const steps = [
    { id: 'formListing' },
    { id: 'confirmListings' },
    { id: 'success' },
]

function SampleForm() {
    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case 'formListing':
            return <SampleFirst {...props} />
        case 'confirmListings':
            return <SampleListing {...props} />
        case "success":
            return <SampleSuccess {...props} />
    }
    console.log(step)
    return (
        <div>SampleForm</div>
    )
}

export default SampleForm;