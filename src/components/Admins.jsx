import React from 'react'
import { useLocation } from 'react-router-dom';

const Admins = ({ adminDetail }) => {
    const { state } = useLocation()
    console.log(adminDetail);
    console.log(state?.firstName);
    return (
        <div>
            <p>Welcome to the admin group</p>
            <div>
                <p key={state?.id}>First Name: {state?.firstName}{adminDetail?.firstName}</p>
            </div>
        </div>
    )
}

export default Admins