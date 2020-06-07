import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'

const ItemActionsWrapper = ({ onDelete, className, children }) => {
  const [showActions, setShowActions] = useState(false)

  return (
    <div
      onMouseOver={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className={`relative${className ? ' ' + className : null}`}
    >
      {showActions && (
        <div className="absolute top-0 right-0 m-2 bg-gray-100 rounded-lg">
          {/* <button className="font-bold rounded-lg hover:bg-gray-300 transition-background duration-150 ease-out p-1 text-sm">
            <FiCopy />
          </button> */}
          <button
            onClick={onDelete}
            className="font-bold rounded-lg hover:bg-gray-300 transition-background duration-150 ease-out p-1 text-sm"
          >
            <FiX />
          </button>
        </div>
      )}

      {children}
    </div>
  )
}

export default React.memo(ItemActionsWrapper)
