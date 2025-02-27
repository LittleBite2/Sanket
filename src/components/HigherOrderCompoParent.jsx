import React from 'react'
import HOCPetrolPrice from './HOCPetrolPrice'
import HOCDieselPrice from './HOCDieselPrice'

function HigherOrderCompoParent() {
  return (
    <div>
      <HOCPetrolPrice/>
      <HOCDieselPrice/>
    </div>
  )
}

export default HigherOrderCompoParent
