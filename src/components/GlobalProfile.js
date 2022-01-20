import React from 'react';
// import './GlobalProfile.css';
import TweetBoxxProfile from './TweetBoxProfile';
import Post from './Post';
import styled from 'styled-components';

const GlobalProfileee = styled.div`
.globalprofile_header {
    top: 0;
    // z-index: 100;
    border: 20px solid white;
    margin-top: -10px;
}`


function GlobalProfile() {
        return (
            
            <div className="globalprofile">
                {/*Header*/}
                <GlobalProfileee>
                <div className="globalprofile_header">
                <h6>HanaaKevin</h6>
                </div>
                </GlobalProfileee>
                
                {/*TweetBox*/}
                <TweetBoxxProfile />
                {/*Post*/}
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }

export default GlobalProfile;