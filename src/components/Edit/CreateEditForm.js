import React from 'react';
import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { UserContext } from "../../contexts/User"

const Button = styled.button`
{
    background-color: black;
    border: 2px solid  black;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 17.9em;
    cursor: pointer;
    margin-top: 10px
}
`

const CreateEditForm = () => {
    const { editUser } = useContext(UserContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            bio: "",
        },
        onSubmit: values => {
          editUser(values)
        },
    })


    return (
        <div>
            <form className='mt-3' onSubmit={formik.handleSubmit}> 
                <div className="mb-3">
                    <input 
                    type="text" 
                    className="form-control"  
                    placeholder='Prénom' 
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="text" 
                    className="form-control"  
                    placeholder='Nom'
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange} 
                    />
                </div>
                
                <div className="mb-3">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Bio' 
                    name="bio"
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                    />
                </div>

                <Button type="submit">S'inscrire</Button>
            </form>   
        </div>
    );
};

export default CreateEditForm;