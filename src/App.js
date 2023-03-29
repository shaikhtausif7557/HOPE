import './App.css'
import "./components/login/login.css";
import Header from "./components/Header/Header";
import Slider from "./components/slider/slider";
import Problem from "./components/pcontainer/Problem";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/Login';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Signup from './signup/Signup';

const Home = () => {
  return(<div><Header/>
  <Slider/>
  <Problem /></div>)
}

const app=()=> {
  return(
    <div className="app">
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  );
};
export default app;