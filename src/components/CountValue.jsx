import React, { useRef, useState } from 'react'

function CountValue() {
    // const countValue = useRef(0);
    const[count,setCount]=useState(0);
    function counter() {
        // countValue.current += 1;
        // console.log(`count value is : ${countValue.current}`)
        setCount(count+1)
        console.log(`count value is : ${count}`)
    }
    console.log("comonent is rendered")
    return (
        <div>
            <button className='bg-red-300' onClick={counter}>Click me</button>
        </div>
    )
}

export default CountValue
