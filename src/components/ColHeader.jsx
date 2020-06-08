import React from 'react'

const ColHeader = ({ title, color = 'blue', renderActions }) => (
  <div className={`flex items-center border-${color}-400 border-b-4 pb-4 mb-4`}>
    <h2 className="flex-1 w-100 font-semibold text-gray-700 uppercase">
      {title}
    </h2>
    {renderActions}
  </div>
)

export default React.memo(ColHeader)
