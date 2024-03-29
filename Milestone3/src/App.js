

import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Contact} from "./pages/Contact";
import {Buy} from "./pages/Buy"
import {Rent} from "./pages/Rent"
import {MySavedCars} from "./pages/Saved_Cars"
import {About} from "./pages/About"
import {Login} from "./pages/Login"
import {NewAccount} from "./pages/NewAccount"
import { AuthProvider} from './context/AuthContext';
import {Home} from './pages/Home'
import {Profile} from "./pages/universalComponets/Profile"
import "./App.css"

export function App() {
  
  
  return(
    <div>
  <BrowserRouter>
  <AuthProvider>
  <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Buy" element={<Buy />} />
      <Route path="/Rent" element={<Rent />} />
      <Route path="/My_Saved_Cars" element={<MySavedCars />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/NewAccount" element={<NewAccount />}/>
      <Route path="/Profile" element={<Profile />}/>

    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </div>)
  
}

