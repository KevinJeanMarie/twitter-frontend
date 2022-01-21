import React from 'react';
import '../Global.css';
import TweetBox from './TweetBox';
import Post from './Post';


function Global() {
        return (
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
        )
    }

export default Global;