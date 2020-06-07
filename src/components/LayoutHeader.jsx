import React from 'react'

const LayoutHeader = () => (
  <div className="flex align-center fixed top-0 h-16 items-center px-10 z-40 w-screen">
    <div className="flex-initial">
      <h1 className="text-lg font-bold text-gray-600 tracking-wider">
        MY <span className="text-blue-300">BOARD</span>
      </h1>
    </div>
  </div>
)

export default React.memo(LayoutHeader)
