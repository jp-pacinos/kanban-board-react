import React, { useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import BoardContainer from 'components/BoardContainer'
import Col from 'components/Col'
import Item from 'components/Item'
import AddCol from 'components/AddCol'
import initialData from 'utils/InitialData'
import useBoardReducer from 'hooks/useBoardReducer'

const Board = () => {
  const [state, dispatch] = useBoardReducer(
    JSON.parse(localStorage.getItem('board')) || initialData
  )

  useEffect(() => {
    localStorage.setItem('board', JSON.stringify(state))
  }, [state, dispatch])

  const { tasks, columns, columnsOrder } = state

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    let sameId = result.destination.droppableId === result.source.droppableId
    let sameIndex = result.destination.index === result.source.index
    if (sameId && sameIndex) return

    const [, id] = result.draggableId.split('-')
    const newResult = { ...result, draggableId: id }

    if (result.type === 'item') {
      dispatch({ type: 'item-move', result: newResult })
    } else if (result.type === 'col') {
      dispatch({ type: 'col-move', result: newResult })
    }
  }

  const handleItemAdd = (colId, content, e) => {
    e.preventDefault()
    dispatch({ type: 'item-add', colId, content })
  }

  const handleItemRemove = (colId, taskId) => {
    dispatch({ type: 'item-remove', colId, taskId })
  }

  const handleColAdd = (name, e) => {
    e.preventDefault()
    dispatch({ type: 'col-add', name })
  }

  const handleColRemove = (colId) => {
    dispatch({ type: 'col-remove', colId })
  }

  const handleColChangeColor = (colId, color) => {
    dispatch({ type: 'col-change-color', colId, color })
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="all-col" type="col" direction="horizontal">
        {(dropProvided) => (
          <div
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
            className="absolute"
          >
            <BoardContainer>
              {columnsOrder.map((id, idx) => {
                const { name, color, taskIds } = columns[id]

                return (
                  <Col
                    key={id}
                    index={idx}
                    id={id}
                    name={name}
                    color={color}
                    onAddItem={handleItemAdd}
                    onChangeColor={handleColChangeColor}
                    onRemove={handleColRemove}
                  >
                    {taskIds.map((tId, tIdx) => {
                      const { content } = tasks[tId]

                      return (
                        <Item
                          key={tId}
                          id={tId}
                          index={tIdx}
                          content={content}
                          color={color}
                          onRemove={() => handleItemRemove(id, tId)}
                        />
                      )
                    })}
                  </Col>
                )
              })}

              {dropProvided.placeholder}

              <AddCol onAddCard={handleColAdd} />
              <div className="p-4"></div>
            </BoardContainer>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board
