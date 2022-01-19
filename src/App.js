import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import GlobalProfile from "./components/GlobalProfile";
import TweetBoxProfile from './components/TweetBoxProfile';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;