import React, { useRef } from 'react'

function UseStateHooke() {

    const myRef = useRef();

    const secondref = useRef();

    function handleClick() {

        myRef.current.style.color = "red";
        secondref.current.style.color = "blue";

    }

    return (
        <div>
            <p ref={myRef}>My name is sanket</p>
            <p ref={secondref}>My edu is nothing</p>
            <button className='bg-red-400 text-white p-2' onClick={handleClick}>Change color</button>
        </div>
    )
}

export default UseStateHooke