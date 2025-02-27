import React, { useCallback, useMemo, useState } from 'react'
import CallbackChild from './CallbackChild'

function UseCallbackHook() {
    const [count, setCount] = useState(0)
    const Learning = useCallback(
        function learning() {
            console.log("learning function called");
        }, [])


    return (
        <div>

            <CallbackChild learn={Learning} />
            <button className='bg-red-500 rounded-2xl m-5 p-2' onClick={() => setCount(count + 1)}>increameny</button>

        </div>
    )
}

export default UseCallbackHook
