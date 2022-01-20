import React from 'react';
import { useContext, useEffect, useState } from 'react'
import Sidebar from "../components/Sidebar";
import SidebarOption from "../components/SidebarOption";
import Global from "../Global";
import Widgets from "../components/Widgets";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import styled from 'styled-components'
import CreateTweetModal from '../components/Tweet/CreateTweetModal';
import { UserContext } from "../contexts/User"
import { useParams} from 'react-router-dom'
import CreateTweetForm from '../components/Tweet/CreateTweetForm';
import GlobalProfile from '../components/GlobalProfile';

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
  const { user } = useContext(UserContext)
  const { id } = useParams()


    return (
      <Container>
        <Ap>
        <div className="app">
  
          {/*SIDEBAR*/}
          <Sidebar setCreateTweetModalVisible={setCreateTweetModalVisible} createTweetModalVisible={createTweetModalVisible}/>
          {/*FEED*/}
          <GlobalProfile/>
          {/*WIDGETS*/}
          <Widgets />
          
        </div>
        </Ap>
        <CreateTweetModal
          isOpen={createTweetModalVisible}
          onClose={() => setCreateTweetModalVisible(false)}
          />
      </Container>
    );
};

export default Profil;