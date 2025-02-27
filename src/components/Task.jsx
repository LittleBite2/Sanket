import React, { useState } from "react";

function Task() {
    const [allTasks, setAllTasks] =
        useState([
            `Task 1`,
            `Task 2`,
            `Task 3`
        ])
    function Addtask() {
        setAllTasks([...allTasks, `Task${allTasks.length + 1}`])
    }

    return (
        <div className="bg-grey h-screen flex flex-col justify-center items-center">
            <ul>{allTasks.map((item, index) => (<li key={index}>{item}</li>))}</ul>
            <button onClick={Addtask}>Add Task</button>
        </div>

    )
}

export default Task