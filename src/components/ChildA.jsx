import React, { useContext } from 'react'
import ChildB from './ChildB'
import { UserContext } from '../context/UserContext'

function ChildA() {
    const {count}= useContext(UserContext)
    return (
        <div className='m-5'>
            <p>i am at child a component</p>

            <p>{count}</p>
            <ChildB />
        </div>
    )
}

export default ChildA
