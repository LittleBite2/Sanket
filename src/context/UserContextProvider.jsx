import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({children}) {
    const firstName = "Sanket"
    const [count,setCount]=useState(0)
    return (
        <UserContext.Provider value={{firstName,count,setCount}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
