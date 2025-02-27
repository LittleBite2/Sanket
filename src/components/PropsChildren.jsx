import React from 'react'
import SubChild from './SubChild'

function PropsChildren() {
    return (
        <div>
            <SubChild title="Good Morning">
                <h2>Title One Inside the subChild</h2>
                <h2>Content Inside the subChild.</h2>
            </SubChild>
            <SubChild >
                <h2 className='font-bold'>Title Two Inside the subChild</h2>
                <h2 className='font-bold'>Content Inside the subChild.</h2>
            </SubChild>
        </div>
    )
}

export default PropsChildren
