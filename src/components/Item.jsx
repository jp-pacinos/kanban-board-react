import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import ItemActions from 'components/ItemActions'

const Item = ({ id, index, content, onRemove, color }) => {
  return (
    <Draggable draggableId={`item-${id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={
            `bg-white shadow rounded w-full mb-3 border-l-4 border-${color}-400 ` +
            (snapshot.isDragging ? 'shadow-lg' : '') +
            (snapshot.isDropAnimating ? 'shadow-md' : '')
          }
        >
          <ItemActions onDelete={onRemove} className="py-6 px-5">
            <p className="break-words font-normal">{content}</p>
          </ItemActions>
        </div>
      )}
    </Draggable>
  )
}

export default React.memo(Item)
