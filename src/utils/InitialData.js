export default {
  tasks: {
    1: { id: 1, content: 'Task 1' },
  },

  columns: {
    1: { id: 1, name: 'Requested', color: 'blue', taskIds: ['1'] },
    2: { id: 2, name: 'Ongoing', color: 'orange', taskIds: [] },
    3: { id: 3, name: 'completed', color: 'green', taskIds: [] },
  },

  columnsOrder: ['1', '2', '3'],
}
