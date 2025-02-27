import React, { useEffect, useState } from 'react'

function EffectHook() {
    const[countOne, setCountOne]= useState(0)
    const[countTwo, setCountTwo]= useState(0)
    useEffect(()=>{
        alert("component is mounted");
    },[countTwo,countOne])//dependencies *********if [] this bracket is empty then the alert only shows first time rendering 
  return (
    <div>
        <p>Count one is increamented {countOne}</p>
        <p>Count Two is increamented {countTwo}</p>
      <button onClick={()=>setCountOne(countOne+1)} className='bg-black text-white px-3 py-2'>button 1</button>
      <button onClick={()=>setCountTwo(countTwo+1)} className='bg-black text-white px-3 py-2'>button 2</button>
    </div>
  )
}

export default EffectHook
