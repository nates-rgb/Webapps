import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { BrowserRouter, Route ,Link, Routes} from "react-router-dom";
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact";
import "./App.css"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>,
 
  document.getElementById('root')
);
