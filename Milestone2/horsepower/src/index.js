import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import {Contact} from "./pages/Contact";
import {Buy} from "./pages/Buy"
import {Rent} from "./pages/Rent"
import {MySavedCars} from "./pages/Saved_Cars"
import {About} from "./pages/About"
import {Login} from "./pages/Login"
import {NewAccount} from "./pages/NewAccount"
import "./App.css"
ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Buy" element={<Buy />} />
      <Route path="/Rent" element={<Rent />} />
      <Route path="/My_Saved_Cars" element={<MySavedCars />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/NewAccount" element={<NewAccount />}/>

    </Routes>
    </BrowserRouter>,
 
  document.getElementById('root')
);

