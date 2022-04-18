import React from 'react'
import PosContent from './PosContent'
function PosBody() {
  return (
    <div className='flex flex-col p-2 gap-5 h-full'>
        <input type="text" className='primary-input' placeholder='Search....'/>
        <PosContent />
    </div>
  )
}

export default PosBody