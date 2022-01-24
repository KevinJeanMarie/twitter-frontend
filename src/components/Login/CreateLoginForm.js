import React from 'react';
import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { UserContext } from "../../contexts/User"

const CenterButton = styled.div`
{
    margin : auto;
}
`
const Auto = styled.div`
{
    margin : auto;
}
`

const Button2 = styled.button`
{
    background-color: white;
    border: 2px solid black;
    border-radius: 50px;
    color: black;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 11px;
    padding: 0.9em 6.6em;
    cursor: pointer;
    margin-top: 15px
}
`

const Button = styled.button`
{
    background-color: black;
    border: 2px solid black;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 11px;
    padding: 0.9em 9.6em;
    cursor: pointer;
    margin-top: 20px;
}
`

const CreateLoginForm = () => {
    const { login } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            password: "",
            email: "",
        },
        onSubmit: values => {
          login(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short"),
          email: Yup.string()
            .required("Email is required")
            .email("Email invalid"),
        })
    })


    return (
        <div>
            <form className='mt-3' onSubmit={formik.handleSubmit}> 
                <div className='row'>
                    <Auto className="mb-3 col-6">
                        <input 
                        type="email" 
                        className="form-control"  
                        placeholder='Email'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange} 
                        />
                    </Auto>
                </div>

                <div className='row'>
                    <Auto className="mb-3 col-6">
                        <input 
                        type="password" 
                        className="form-control"  
                        placeholder='Mot de passe'
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        />
                    </Auto>
                </div>

                <div className='d-flex flex-column row'>
                    <CenterButton className='col-6 '><Button type="sublit">Suivant</Button></CenterButton>
                    <CenterButton className='col-6 '><Button2>Mot de passe oublié</Button2></CenterButton>
                </div>
            </form>
        </div>
    );
};

export default CreateLoginForm;