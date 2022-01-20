import React from 'react';
import Sidebar from "../components/Sidebar";
import SidebarOption from "../components/SidebarOption";
import Global from "../Global";
import Widgets from "../components/Widgets";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import styled from 'styled-components'

const Homee = styled.div`
.app {
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 9px;
}
`

const Home = () => {
    return (
        <Homee>
        <div className="app">
  
          {/*SIDEBAR*/}
          <Sidebar />
          {/*FEED*/}
          <Global />
          {/*WIDGETS*/}
          <Widgets />
        </div>
        </Homee>
    );
};

export default Home;