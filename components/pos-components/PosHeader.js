import React from 'react'

function PosHeader() {
  return (
      <div className="flex flex-row g-gray-300 space-x-4 pl-20 py-2 font-sans text-sm bg-white">
        <a href="#POS" className="topbar-link">
          Table
        </a>
        <a href="#POS" className="topbar-link active">
          POS
        </a>
        <a href="#POS" className="topbar-link">
          Order Status
        </a>
        <a href="#POS" className="topbar-link">
          Payment
        </a>
      </div>
  )
}

export default PosHeader
