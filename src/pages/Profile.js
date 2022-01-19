import React from 'react';
import { useContext } from "react"


import { UserContext } from "../contexts/User"

const Profile = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            
        </div>
    );
};

export default Profile;