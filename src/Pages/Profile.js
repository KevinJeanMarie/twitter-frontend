import React from 'react';
import Sidebar from "../components/Sidebar";
import SidebarOption from "../components/SidebarOption";
import GlobalProfile from "../components/GlobalProfile";
import Widgets from "../components/Widgets";
import TweetBoxProfile from "../components/TweetBoxProfile";
import Post from "../components/Post";
import styled from 'styled-components'

const Ap = styled.div`
.app {
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
}
`

const Profile = () => {
    return (
        <Ap>
        <div className="app">
  
          {/*SIDEBAR*/}
          <Sidebar />
          {/*FEED*/}
          <GlobalProfile />
          {/*WIDGETS*/}
          <Widgets />
        </div>
        </Ap>
    );
};

export default Profile;