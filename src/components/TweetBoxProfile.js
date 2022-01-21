import React from 'react';
import styled from 'styled-components';
import { GoVerified } from 'react-icons/go';
import { UserContext } from ".././contexts/User";
import { useContext, useState, useEffect } from 'react'


const TweetBoxxProfile = styled.div`

//FINIR LE SCROLL DU MILIEU DE LA PAGE
// .globalprofile {
//     flex: 0.4;
//     border-right: 1px solid #e2e2e2;
//     min-width: fit-content;
//     overflow-y:scroll;   
// }

.tweetBoxProfile {
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(233, 232, 232);
    padding-right: 10px;
    margin-top: -10px;
}

.tweetBoxProfile form {
    display: flex;
    flex-direction: column;
}

.tweetBoxProfile_img {
    // padding: 20px;
    display: flex;
    width: 1px;
}

.picturetweetbox img {
    border-radius: 50px;
width:  100px;
height: 100px;
border: 3px solid rgb(212, 210, 210);
}

.tweetBoxProfile button {
    margin-top: 10px;
    margin-left: auto;
    border-color: gray;
    width: 85px;
    font-weight: bold;
    font-size: 12px;
    // height: 10px;
}

.row img {
    height: 180px;
}

.picturetweetbox h4 {
    display:flex;
    font-size: 20px;
}

.picturetweetbox h5 {
   color: rgb(51, 185, 238);
   font-size: 15px;
}

.picturetweetbox h6 {
    padding-bottom: 20px;
    color: grey;
    font-size: 14px;
 }
 
.bar {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.bar a {
    color: grey;
text-decoration: none;
padding: 15px;
padding-right: 30px;
padding-left: 30px;
font-size: 12px;
}

.bar a:hover {
background-color: rgb(202, 205, 205);
transition: all 0.4s ease 0s;
}

.greytext {
    color: grey;
    font-size: 12px
}

.bio {
    color: black;
}

.info {
    margin-left: 20px;
}


`

function TweetBoxProfile() {
    const { user, getUser } = useContext(UserContext)
    useEffect(()=> {
        getUser()
    },[])

    if (!user) {
        return <p>Loading...</p>
      }
    return (
        <TweetBoxxProfile>
        <div className="tweetBoxProfile">
            <form>
                <div className="row">
                <img src="https://cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/KROIGO2GVMT5RI7S7PW5JEWMZU.jpg"/>
                </div>
        
                
                <button type="button" 
                className="btn col-4 rounded-pill btn-sm" 
                type="submit">Edit profile
                </button>
            <div className="info">
                <div className="picturetweetbox">
                <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
                <h4>&thinsp;{<h5><GoVerified/></h5>}</h4>
                <h6>@{user.firstName}{user.lastName}</h6>
                </div>

            <div className="greytext">      
                <div className="bio">
                    <p>Biographie de Hanaa et Kévin</p>
                </div>

                <div className="accountdate">
                    <p>Joined ??/??/????</p>
                </div>

                <div className="followingfollower">
                    <p>Following&emsp;&ensp;Followers</p>
                </div>
                </div>
                </div>

                <div className="bar">
                    <a className="tweets">Tweets</a>
                    <a className="tweetsreplies">Tweets and replies</a>
                    <a className="media">Media</a>
                    <a className="likes">Likes</a>
                </div>
            

            </form>
            
        </div>
        </TweetBoxxProfile>
    )
}

export default TweetBoxProfile;