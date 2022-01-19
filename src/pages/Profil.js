import React from 'react';
import { useContext, useEffect, useState } from 'react'
import Sidebar from "../components/Sidebar";
import SidebarOption from "../components/SidebarOption";
import Global from "../Global";
import Widgets from "../components/Widgets";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import styled from 'styled-components'
import CreateTweetForm from '../components/Tweet/CreateTweetForm';

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
const Container = styled.div`
{

}
`

const Profil = () => {
  const [createTweetModalVisible, setCreateTweetModalVisible] = useState(false)
    return (
      <Container>
        <Ap>
        <div className="app">
  
          {/*SIDEBAR*/}
          <Sidebar setCreateTweetModalVisible={setCreateTweetModalVisible} createTweetModalVisible={createTweetModalVisible}/>
          {/*FEED*/}
          <Global />
          {/*WIDGETS*/}
          <Widgets />
          
        </div>
        </Ap>
        <CreateTweetForm
          isOpen={createTweetModalVisible}
          onClose={() => setCreateTweetModalVisible(false)}
          />
      </Container>
    );
};

export default Profil;