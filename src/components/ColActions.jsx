import React, { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import Colors from 'utils/Colors'

const ColActions = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className="p-1 inline-flex items-center hover:bg-gray-200 rounded transition-background duration-150 ease-out"
      >
        <FiMoreHorizontal />
      </button>

      {open && <Contents {...props} />}
    </div>
  )
}

export default ColActions

// ===================================================

const Contents = React.memo(
  ({ onClickDelete, onChangeColor, currentColor }) => {
    const colors = Object.entries(Colors).map(([color, val]) => {
      let btnClass = `flex-initial ${val} mr-1 mb-1 transition-background duration-200 ease-in-out`
      let colorSelected =
        btnClass +
        (color === currentColor
          ? ' border-4 border-gray-600 focus:outline-none'
          : ' hover:opacity-50')

      return (
        <button
          key={color}
          onClick={(e) => onChangeColor(color, e)}
          className={colorSelected}
          style={{ width: '25px', height: '25px' }}
        ></button>
      )
    })

    return (
      <div
        className={'absolute bg-white right-0 shadow-lg rounded p-3'}
        style={{ width: '200px' }}
      >
        <div>
          <p className="w-100 text-sm font-bold text-gray-800 mb-3">Actions</p>
          <button
            onClick={onClickDelete}
            className="p-2 text-white bg-red-500 hover:bg-red-600 active:bg-red-500 rounded-full inline-flex transition-background duration-200 ease-in-out"
          >
            <AiOutlineDelete />
          </button>
        </div>

        <div className="border-b-2 border-gray-200 my-4"></div>

        <div>
          <p className="w-100 text-sm font-bold text-gray-800 mb-3">
            Background Color
          </p>

          <div className="flex flex-wrap">{colors}</div>
        </div>
      </div>
    )
  }
)
