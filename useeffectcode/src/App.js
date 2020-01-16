import React from 'react';
import {useState,useEffect} from 'react'

import './App.css';

function App() {
  let [fullName,setFullName]=useState({first_name:'NAME',last_name:'SURNAME'})
  let [title,setTitle]=useState('using useEffect() in react')

  useEffect(()=>{
    setFullName({first_name:'Ravi',last_name:'Verma'})
  })
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>First Name:{fullName.first_name}</h2>
      <h2>Last Name:{fullName.last_name}</h2>
      
    </div>
  );
}

export default App;
