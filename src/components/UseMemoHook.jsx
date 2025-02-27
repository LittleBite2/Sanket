import React, { useMemo, useState } from 'react'

function UseMemoHook() {

    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);


    const multiplication = useMemo(function multiply() {
        console.log("i am called in multiplication function");
        return count * 10;
    }, [count])


    return (
        <div>
            <p>Multiply by 10 to count value : {multiplication}</p>
            <button className='bg-red-600 m-5 p-5' onClick={() => setCount(count + 1)}>increament by 1 and count is {count}</button><br />
            <button className='bg-red-600 m-5 p-5 mt-7' onClick={() => setPrice(price + 1)}>increament by 1 and price is {price}</button>
        </div>
    )
}


export default UseMemoHook
