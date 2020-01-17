import React from 'react';
import Header from './components/Header'
import './App.css';
import {useState,useEffect} from 'react'

function App() {

  let [ival,setIval]=useState(' ');

  let onChange=(e)=>{
    console.log(e.target.value)
    setIval(e.target.value)
    console.log(ival)
  }

  return (
    <div className="App">
      <input type="text" value={ival} onChange={onChange}/> 
      <Header con={ival}></Header>
      
    </div>
  );
}

export default App;
