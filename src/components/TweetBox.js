import React from 'react';
import { useContext } from "react"
import styled from 'styled-components';
import { useFormik } from 'formik'
import { UserContext } from "../contexts/User"

const TweetBoxx = styled.div`
.tweetBox {
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(233, 232, 232);
    padding-right: 10px;
    margin-top: -10px;
}

.tweetBox form {
    display: flex;
    flex-direction: column;
}

.tweetBox_input {
    padding: 20px;
    display: flex;
}

.tweetBox_input img {
    border-radius: 50px;
width: 55px;
height: 55px;
}

.tweetBox_input input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
}

.tweetBox_imageInput {
border: none;
padding: 10px;
}

.tweetBox button {
    margin-left: auto;
}
`

const TweetBox = () => {
    const { createTweet } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            contents: "",
        onSubmit: values => {
          createTweet(values)
        },
    }
    })

    return (
        <TweetBoxx>
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
                <input 
                placeholder="What's happening?" 
                type="text" 
                name="contents"
                value={formik.values.contents}
                onChange={formik.handleChange}
                />
                
               
                </div>
                <button type="button" 
                className="btn btn-primary col-2 rounded-pill fw-bold text-white fs-6" 
                type="submit">Tweet
                </button>
            </form>
            
        </div>
        </TweetBoxx>
    )
}

export default TweetBox
