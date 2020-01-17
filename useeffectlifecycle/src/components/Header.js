import React from 'react'
import {useEffect} from 'react'

function Header(props) {

    //componentDidMount
    useEffect(()=>{
        console.log('component did mounted')
    },[])

    //componentWillUpdate

    useEffect(()=>{
        console.log('component updated')
    },[props.con])

    return (
        <div>
            <h1>{props.con}</h1>
        </div>
    )
}

export default Header