import React, { useState } from 'react'
import ChildMemo from './ChildMemo';

function MemoHook() {
    const[count,setCount]= useState(0);
    const[data,setData]= useState(1);
  return (
    <div className='p-5'>
      <h1>This is parent component for Memo</h1>
      <ChildMemo data={data}/>
      <button onClick={()=>setCount(count+1)} className='bg-red-500 text-white px-3 py-2 my-3'>Increament Count:{count}</button>
      <button onClick={()=>setData(data+1)} className='bg-blue-500 text-white px-3 py-2 my-3 ml-4'>Increament Data:{data}</button>
    </div>
  )
}

export default MemoHook
