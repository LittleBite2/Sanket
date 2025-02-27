import React, { useState } from 'react'

function HigherOrderCompo(PriceCompo) {
    function InnerFunction() {
        //common logic
        const [count, setCount] = useState(90)
        function increase() {
            setCount(count + 1)
        }
        function decrease() {
            setCount(count - 1)
        }
        <p>hello</p>


        return (<PriceCompo count={count} increase={increase} decrease={decrease} />)
    }

    return (InnerFunction)
}

export default HigherOrderCompo
