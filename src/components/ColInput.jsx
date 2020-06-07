import React, { useState } from 'react'

const ColInput = (props) => {
  const transition = 'transition-colors duration-100 ease-in-out'
  const variant = 'focus:outline-0 hover:bg-gray-100'
  const style = `placeholder-${props.color}-500 rounded bg-white shadow font-semibold`
  const className = `px-3 py-4 block w-full ${transition} ${variant} ${style}`

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    props.onSubmit(text, e)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={className}
        placeholder={props.placeholder}
        required
      />
    </form>
  )
}

export default React.memo(ColInput)
