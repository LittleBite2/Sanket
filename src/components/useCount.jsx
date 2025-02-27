import React, { useState } from 'react'

function useCount() {
       const [count, setCount] = useState(90)
        function increase() {
            setCount(count + 1)
        }
        function decrease() {
            setCount(count - 1)
        }
  return [increase,decrease,count]
  
}

export default useCount
