import React, { forwardRef } from 'react'

const STYLE = { maxWidth: 340, minWidth: 340 }

const ColPlain = forwardRef(({ style = STYLE, className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={'flex-none p-3 mr-4' + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
    </div>
  )
})

export default React.memo(ColPlain)
