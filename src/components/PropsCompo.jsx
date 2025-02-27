import React from 'react'
import PropChild from './PropChild'

let person = [
    {
        name: "Sumit",
        desig: "full stack developer",
        exp: "2",
    },
    {
        name: "Sanket",
        desig: "game developer",
        exp: "3",
    },
    {
        name: "Rahul",
        desig: "doctor",
        exp: "7",
    },
    {
        name: "Dinesh",
        desig: "web developer",
        exp: "5",
    },
    {
        name: "Sagar",
        desig: "App Developer",
        exp: "5",
    }
]

function PropsCompo() {
    return (
        <>
            {/* <PropChild name="Sanket" desig="full stack developer" exp="2" />
            <PropChild name="Rahul" desig="game developer" exp="3" />
            <PropChild name="Sumit" desig="doctor" exp="22" />
            <PropChild name="Sumit" desig="web developer" exp="220" /> */}

            {
                person.map((item, i) => (
                    <div key={i}>
                        <PropChild name={item.name} desig={item.desig} exp={item.exp} />
                    </div>
                ))
            }

        </>
    )
}


export default PropsCompo