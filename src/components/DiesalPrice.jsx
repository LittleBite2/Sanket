import React from 'react'
import useCount from './useCount'

function DiesalPrice() {
    const [increase, decrease, count] = useCount()
    // const [count, setCount] = useState(90)
    // function increase() {
    //     setCount(count + 1)
    // }
    // function decrease() {
    //     setCount(count - 1)
    // }
    return (
        <div className='m-5'>
            <p className='text-3xl m-5 p-5'>Diesal price is : {count}</p>
            <button onClick={increase} className='bg-red-500 text-white m-3 p-3'>Increase</button>
            <button onClick={decrease} className='bg-blue-500 text-white m-3 p-3'>Decrease</button>
        </div>
    )
}

export default DiesalPrice