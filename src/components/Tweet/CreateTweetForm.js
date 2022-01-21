import React from 'react';
import { useContext } from "react"
import styled from 'styled-components'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';


import { UserContext } from "../../contexts/User"

const TweetModal = styled.div`
button {
 
 background-color: rgb(29, 155, 240);
    border-radius: 50px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 12px;
    padding: 6px;
    width: 80px;
    cursor: pointer;
    margin-top: 68px;
    margin-left: 420px;
}

.ModalTweet input {
    border: none;
    display: flex;
    margin-top: 10px;
}`

// const Button = styled.button`
// {
//     background-color: rgb(29, 155, 240);
//     border-radius: 50px;
//     border: none;
//     color: white;
//     font-weight: bold;
//     font-size: 12px;
//     padding: 6px;
//     width: 80px;
//     cursor: pointer;
//     margin-left: auto;
// }
// `

const CreateTweetForm = () => {
    const { createTweet } = useContext(UserContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            contents: "",
        },
        onSubmit: values => {
            createTweet(values)
        },
        contents:"",
    })

    return (
        <TweetModal>
    <form onSubmit={formik.handleSubmit}>
        <div className="ModalTweet">
            <input 
            type="text" 
            placeholder="What's happening?"
            name="contents"
            value={formik.values.contents}
            onChange={formik.handleChange}
            />
            <button type="submit">Tweet
           
            </button>
            </div>
    </form> 
        </TweetModal>
            
    );
};

export default CreateTweetForm;