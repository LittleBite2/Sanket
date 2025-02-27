import React, { memo } from 'react'

function CallbackChild(props) {
  console.log(props.learn, "in child component");
  return (
    <div>

    </div>
  )
}

export default memo(CallbackChild)
