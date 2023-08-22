import React, { useState } from 'react'
import SampleFirst from './SampleFirst'

const SampleFirstSubmit = ({ formData }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [landmark, setLandmark] = useState('')
    // console.log('formData :>> ', formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description, location, landmark)

    }
    return (
        <div>
            <h1>Details</h1>
            <SampleFirst />
            <p>Title of Property: {formData.title}</p>
            <p>Description: {formData.description}</p>
            <p>Location: {formData.location}</p>
            <p>Nearest Landmark: {formData.landmark}</p>
            {formData.images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} width='100' />
                </div>
            ))}
        </div>
    )
}

export default SampleFirstSubmit