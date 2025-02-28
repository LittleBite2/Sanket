import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function ChildB() {
    const {firstName,setCount,count}= useContext(UserContext)
   console.log(firstName,"foirst")
    return (
        <div className='m-5'>
            <p>i am at child B component</p>
            <p>My first name is {firstName}</p>
            <button onClick={()=>setCount(count+1)} className='bg-red-600 m-3 p-3'>Increament</button>
        </div>
    )
}

export default ChildB
