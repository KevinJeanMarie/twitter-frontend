import React from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import styled from 'styled-components';

const Globalll = styled.div`
.global {
    flex: 0.4;
    border-right: 2px solid #e2e2e2;
    min-width: fit-content;
    overflow-y:scroll;
    
}

.global_header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    border: 25px solid white;
    padding: -20px;
    margin-top: -10px;
}

.global_header h2 {
    font-size: 20px;
    font-weight: 660;
    background-color: white;
}
    `

function Global() {
        return (
            <Globalll>
            <div className="global">
                {/*Header*/}
                <div className="global_header">
                <h2>Home </h2>
                </div>
                
                {/*TweetBox*/}
                <TweetBox />
                {/*Post*/}
                {/* <Post /> */}
               
            
            </div>
            </Globalll>
        )
    }

export default Global;