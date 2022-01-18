import React from 'react';
import styled from 'styled-components';

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

function TweetBox() {
    return (
        <TweetBoxx>
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
                <input placeholder="What's happening?" type="text"></input>
                </div>
                {/* <input className="tweetBox_imageInput" placeholder="Enter image URL" type="text" /> */}
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
