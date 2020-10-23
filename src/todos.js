const todos = [];

const addTodos = (toDo) => { todos.push(toDo); };

const todo = (title = 'Undefined to-do',
  description = 'Undefined description',
  dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12),
  priority = 5,
  notes = ['No notes'],
  checklist = [{ miniTask: 'No checklist', done: false }],
  finished = false) => {
  const getTitle = () => title;
  const setTitle = (text) => { title = text; };
  const getDescription = () => description;
  const setDescription = (text) => { description = text; };
  const getDueDate = () => dueDate;
  const setDueDate = (text) => { dueDate = text; };
  const getPriority = () => priority;
  const setPriority = (n) => { priority = n; };
  const getNotes = () => notes;
  const setNotes = (array) => { notes = array; };
  const getChecklist = () => checklist;
  const setChecklist = (array) => { checklist = array; };
  const getFinished = () => finished;
  const setFinished = () => { finished = finished ? false : true; };

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getNotes,
    setNotes,
    getChecklist,
    setChecklist,
    getFinished,
    setFinished,
  };
};

export { todos, addTodos, todo };