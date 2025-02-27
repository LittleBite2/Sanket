import React from 'react'
import HigherOrderCompo from './HigherOrderCompo'


function HOCDieselPrice(props) {

    // const [count, setCount] = useState(90)
    //    function increase() {
    //        setCount(count + 1)
    //    }
    //    function decrease() {
    //        setCount(count - 1)
    //    }
    return (
        <div className='m-5'>
            <p className='text-3xl m-5 p-5'>Diesal price is : {props.count}</p>
            <button onClick={props.increase} className='bg-red-500 text-white m-3 p-3'>Increase</button>
            <button onClick={props.decrease} className='bg-blue-500 text-white m-3 p-3'>Decrease</button>
        </div>
    )
}

export default HigherOrderCompo(HOCDieselPrice)