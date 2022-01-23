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

const CreateEditForm = () => {
    const { signup } = useContext(UserContext)
   

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            password: "",
            email: "",
            // sexe: "",
            bio: "",
            birthday: Date,
            // language: "",
            // country:"",
            // tel: ""
        },
        onSubmit: values => {
          signup(values)
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
                    type="text" 
                    className="form-control"  
                    placeholder='Name' 
                    value={formik.values.Name}
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

                <div className="mb-3">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Location' 
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    />
                    </div>

                    
                <div className="mb-3">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Website' 
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    />
                </div>
            </form>

            
        </div>
    );
};

export default CreateEditForm;