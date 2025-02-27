import React, { useState } from "react";

function StateHook() {
    const [pets, setPets] =
        useState({
            dog: 0,
            cat: 0
        })
    
    return (
        <div className="bg-grey h-screen flex flex-col justify-center items-center">
            <p>no. of dogs {pets.dog}</p>
            <p>no. of cats {pets.cat}</p>
            <div className="flex gap-x-5">
                <button className="bg-red-600 text-white px-4 py-3 cursor-pointer rounded-2xl" onClick={() => setPets({ ...pets, dog: pets.dog + 1 })}>add dog</button>
                <button className="bg-blue-600 text-white px-4 py-3 cursor-pointer rounded-2xl" onClick={() => setPets({ ...pets, dog: Math.max(0,pets.dog - 1) })}>less dog</button>
                <button className="bg-red-600 text-white px-4 py-3 cursor-pointer rounded-2xl" onClick={() => setPets({ ...pets, cat: pets.cat + 1 })}>add cat</button>
                <button className="bg-blue-600 text-white px-4 py-3 cursor-pointer rounded-2xl" onClick={() => setPets({ ...pets, cat: Math.max(0,pets.cat - 1) })}>less cat</button> 
            </div>
        </div>

    )
}

export default StateHook