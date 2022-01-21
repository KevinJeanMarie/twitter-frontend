import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import { UserContextProvider } from './contexts/User'

import CreateUser from "./Pages/CreateUser";
import Profil from "./Pages/Profil";
import Profile from "./Pages/Profile";
import CreateTweetForm from "./components/Tweet/CreateTweetForm";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";


const App = () => {
  return (
  <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route exact path='/' element={<CreateUser />} />
        <Route exact path='/profil' element={<Profil />} />
        <Route exact path='/home/:id' element={<Home />} />
        <Route exact path='*' element={<NotFound/>}/>  
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
  );
}

export default App;