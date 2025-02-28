import React from 'react'
import ChildA from './ChildA'

function UseContextHook() {
    
    return (
        <div className='m-5'>
            <p>i am at parent component</p>
            <ChildA />
        </div>
    )
}

export default UseContextHook
