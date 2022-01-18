import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import CreateUser from "./pages/CreateUser";
import Profil from "./pages/Profil"

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<CreateUser />} />
          <Route exact path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;