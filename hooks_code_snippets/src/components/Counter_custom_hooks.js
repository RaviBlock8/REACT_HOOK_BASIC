import React from 'react'
import useCounter from '../custom_hooks/useCounter'


function Counter_custom_hooks() {
    let [count,setCounter]=useCounter(2,10,2)
    return (
        <div style={cstyle}>
            <p>Your count value is:{count}</p>
            {/* Do remeber to pass an callback function rather
            than passing setCounter by itself otherwise it will
            go into infinite loop*/}
            <button type="button" style={bstyle} onClick={setCounter}>Click me!!</button>
            
        </div>
    )
}
const cstyle={
    width:'50vw',
    padding:'2rem',
    fontSize:'1.2rem',
    margin:'10px',
    marginLeft:'25vw',
    border:'1px solid black',
    
}

const bstyle={
    border:'none',
    boxShadow:'4px 4px 8px black',
    padding:'0.7rem'
}


export default  Counter_custom_hooks
