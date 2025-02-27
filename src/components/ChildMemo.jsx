import React, { memo } from 'react'

const ChildMemo=memo(function ChildMemo({data}) {
    console.log("Hello , data is",data)
  return (
    <div>
      
    </div>
  )
})

export default ChildMemo

