import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import ColPlain from 'components/ColPlain'
import ColHeader from 'components/ColHeader'
import ColActions from 'components/ColActions'
import ColInput from 'components/ColInput'

const Col = ({
  index,
  id,
  name,
  color,
  onAddItem,
  onChangeColor,
  onRemove,
  children,
  dragProvided,
}) => {
  return (
    <ColPlain ref={dragProvided.innerRef}>
      <div {...dragProvided.dragHandleProps}>
        <ColHeader
          title={name}
          color={color}
          renderActions={
            <ColActions
              currentColor={color}
              onClickDelete={() => onRemove(id)}
              onChangeColor={(changeColor) => onChangeColor(id, changeColor)}
            />
          }
        />
      </div>

      <Droppable droppableId={id} type="item">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <ColInput
        onSubmit={(value, e) => onAddItem(id, value, e)}
        color={color}
        placeholder="+ Add a task..."
      />
    </ColPlain>
  )
}

const withDrag = (Component) => {
  return (props) => (
    <Draggable draggableId={`col-${props.id}`} index={props.index}>
      {(dragProvided) => (
        <div {...dragProvided.draggableProps}>
          <Component {...props} dragProvided={dragProvided} />
        </div>
      )}
    </Draggable>
  )
}

export default React.memo(withDrag(Col))
