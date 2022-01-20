import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import { UserContextProvider } from './contexts/User'

import CreateUser from "./pages/CreateUser";
import Profil from "./pages/Profil"

const App = () => {
  return (
  <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<CreateUser />} />
        <Route exact path="/profil/:id" element={<Profil />} /> 
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
  );
}

export default App;