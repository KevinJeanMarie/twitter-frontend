import React from 'react';
import styled from 'styled-components';
import { UserContext } from ".././contexts/User";
import { useContext, useEffect, useState } from 'react'

const Poss = styled.div`
.post {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid rgb(233, 232, 232);
    padding-bottom: 10px;

}

.post_body {
    flex: 1;
    padding: 10px;
}

.post_body img {
    border-radius: 20px;
    width: 100%;
}

.post_footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px
}

.post_headerspecial {
    font-weight: 600;
    font-size: 15px;
    color: gray;
}

.post_headerText h3 {
    font-size: 20px;
    margin-bottom: 5px;
}

.post_avatar {
    padding: 15px;
}

.post_avatar img {
border-radius: 50px;
width: 55px;
height: 55px;
}
 .avatar {
    width: 500px;
}
`



const  Post = () => {
    const { user, getTweetsUser, tweets, getUser  } = useContext(UserContext)
    useEffect(()=> {
        getUser()
    },[])
    // useEffect(()=> {
    //     getTweetsUser()
    // },[])

    if (!user) {
        return <p>Loading...</p>
      }

    // if (!tweets) {
    //     return <p>Loading...</p>
    //   }
   
 
    
    return (
        <>
        <Poss>
        {/* {tweets.map(e =>  */}
        <div className="post">
            <div className="post_avatar">
                <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>  {user.firstName}
                        <span className="post_headerspecial">
                            <i className="bi bi-patch-check-fill text-info"></i> @{user.firstName}{user.lastName}
                        </span>
                        </h3>
                    </div>

                    <div className="post_headerDescription">
                    {/* <p>{e.contents}</p> */}
                    </div>     
                </div>
            
                <div className="post_footer">
                    <i class="bi bi-chat"></i>
                    <i class="bi bi-arrow-repeat"></i>
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-arrow-bar-up"></i>
                </div>
            </div>
        </div>
         {/* )}   */}
        </Poss>
    </>
    );
}

export default Post
