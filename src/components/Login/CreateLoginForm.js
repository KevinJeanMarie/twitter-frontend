import React from 'react';
import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { UserContext } from "../../contexts/User"

const Button = styled.button`
{
    background-color: white;
    border: 2px solid  rgb(29, 155, 240);
    border-radius: 50px;
    color: rgb(29, 155, 240);
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 17.8em;
    cursor: pointer;
    margin-top: 10px
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
        // validateOnChange: false,
        // validationSchema: Yup.object({
        //   firstName: Yup.string()
        //     .required("le prénom est requis")
        //     .min(1, "Password is too short"),
        //   password: Yup.string()
        //     .required("Password is required")
        //     .min(4, "Password is too short"),
        //   email: Yup.string()
        //     .required("Email is required")
        //     .email("Email invalid"),
        //   sexe: Yup.string()
        //     .required("Age is required")
        // })
    })


    return (
        <div>
            <form className='mt-3' onSubmit={formik.handleSubmit}> 

                <div className="mb-3">
                    <input 
                    type="email" 
                    className="form-control"  
                    placeholder='Email'
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange} 
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="password" 
                    className="form-control"  
                    placeholder='Mot de passe'
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />
                </div>

                <Button type="submit">Suivant</Button>
            </form>

            
        </div>
    );
};

export default CreateLoginForm;