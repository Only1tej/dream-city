import React from 'react'
import { useLocation } from 'react-router-dom';

const Admins = ({ adminDetail }) => {
    const { state } = useLocation()
    console.log(adminDetail);
    console.log(state?.firstName);
    console.log(state?.lastName);
    console.log(state?.email);
    console.log(state?.phoneNumber);
    console.log(state?.photos);
    console.log(state?.id);
    return (
        <div>
            <p>Welcome to the admin group</p>
            <div>
                <p key={state?.id}>First Name: {state?.firstName}{adminDetail?.firstName}</p>
                <p key={state?.id}>Last Name: {state?.lastName}{adminDetail?.lastName}</p>
                <p key={state?.id}>Email: {state?.email}{adminDetail?.email}</p>
                <p key={state?.id}>Phone Number: {state?.phoneNumber}{adminDetail?.phoneNumber}</p>
                <p key={state?.id}>Photo: {state?.photos}{adminDetail?.photos}</p>
            </div>
        </div>
    )
}

export default Admins