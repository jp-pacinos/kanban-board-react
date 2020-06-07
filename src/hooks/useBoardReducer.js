import { useReducer } from 'react'
import randomId from 'utils/randomId'

const useBoardReducer = (state) => {
  return useReducer(reducer, state)
}

export default useBoardReducer

// ====================================================
// reducer

const reducer = (state, { type, ...action }) => {
  switch (type) {
    case 'item-move': {
      const { tasks, columns, columnsOrder } = state
      const { destination, source, draggableId } = action.result

      // update old column
      const fromColumn = columns[source.droppableId]
      const fromTaskIds = [...fromColumn.taskIds]
      fromTaskIds.splice(source.index, 1)
      const newFromColumn = {
        ...fromColumn,
        taskIds: [...fromTaskIds],
      }

      // set new column
      const toColumn = columns[destination.droppableId]
      // we check if we are moving the item in the same column
      const sameId = destination.droppableId === source.droppableId
      const toTaskIds = sameId ? [...fromTaskIds] : [...toColumn.taskIds]
      toTaskIds.splice(destination.index, 0, draggableId)

      // update new column
      const newToColumn = {
        ...toColumn,
        taskIds: [...toTaskIds],
      }

      return {
        tasks,
        columnsOrder,
        columns: {
          ...columns,
          [source.droppableId]: newFromColumn,
          [destination.droppableId]: newToColumn,
        },
      }
    }

    case 'item-add': {
      const { tasks, columns, columnsOrder } = state
      const { colId, content } = action

      const taskId = randomId()
      const column = columns[colId]
      column.taskIds.push(taskId)

      return {
        tasks: {
          ...tasks,
          [taskId]: { id: taskId, content: content },
        },
        columns: { ...columns, [colId]: { ...column } },
        columnsOrder,
      }
    }

    case 'item-remove': {
      const { tasks, columns, columnsOrder } = state
      const { colId, taskId } = action

      const column = columns[colId]
      const newColumn = {
        ...column,
        taskIds: column.taskIds.filter((id) => id !== taskId),
      }

      const newTasks = { ...tasks }
      delete newTasks[taskId]

      return {
        tasks: { ...newTasks },
        columns: { ...columns, [colId]: newColumn },
        columnsOrder,
      }
    }

    case 'col-move': {
      const { tasks, columns, columnsOrder } = state
      const { destination, source, draggableId } = action.result

      const newColumnsOrder = [...columnsOrder]
      newColumnsOrder.splice(source.index, 1)
      newColumnsOrder.splice(destination.index, 0, draggableId)

      return { tasks, columns, columnsOrder: [...newColumnsOrder] }
    }

    case 'col-add': {
      const { tasks, columns, columnsOrder } = state
      const { name } = action

      const colId = randomId()
      const newColumns = {
        ...columns,
        [colId]: { name, id: colId, color: 'blue', taskIds: [] },
      }

      return {
        tasks,
        columns: { ...newColumns },
        columnsOrder: [...columnsOrder, colId],
      }
    }

    case 'col-remove': {
      const { tasks, columns, columnsOrder } = state
      const { colId } = action

      const newColumns = { ...columns }
      delete newColumns[colId]

      return {
        tasks,
        columns: { ...newColumns },
        columnsOrder: columnsOrder.filter((id) => id !== colId),
      }
    }

    case 'col-change-color': {
      const { tasks, columns, columnsOrder } = state
      const { colId, color } = action

      const column = columns[colId]
      column.color = color

      return {
        tasks,
        columns: { ...columns, [column.id]: { ...column } },
        columnsOrder,
      }
    }

    default:
      return state
  }
}
