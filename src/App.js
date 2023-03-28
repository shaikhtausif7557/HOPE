import './App.css'
import "./components/login/login.css";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Problem from "./components/pcontainer/problem";
import React from 'react'

const app=()=> {
  return(
    <div className="app">
    <Header/>
    <Slider/>
    <Problem />
    </div>
  );
};
export default app;