import React, { useState } from 'react'

function ChangeTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    function darkTheme() {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div className={`h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <h2 className='text-2xl'>welcome to react</h2>
            <button className='bg-red-500 rounded-2xl m-5 p-2' onClick={darkTheme}>{isDarkMode?"switch to light mode":"switch to dark mode"}</button>
        </div>
    )
}

export default ChangeTheme
