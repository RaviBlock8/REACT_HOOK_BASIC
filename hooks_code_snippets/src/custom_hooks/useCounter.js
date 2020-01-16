import {useState} from 'react'

const useCounter=(start,finish,step)=>{
    let [count,setCount]=useState(start)

    const handleCount=()=>{
        if(count==finish){
            setCount(start)
        }else{
            setCount(count+step);
        }
    }

    return [count,handleCount]
}

export default useCounter