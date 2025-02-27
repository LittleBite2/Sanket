import React from 'react'

// function PropChild({name, desig, exp}) {
function PropChild(props) {
    const {name,desig,exp}=props;

    return (
        <div className='m-5 flex flex-col items-center bg-red-100'>
            <div>
                <h2 className='text-3xl'>Hello ,I am {name}</h2>
                <p>I am {desig}</p>
                <p>I have {exp} year of experience</p>
            </div>
        </div>
    )
}


export default PropChild
