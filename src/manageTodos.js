import { todos, categories, todo } from './todos';

const manageTodos = (() => {
  const addTodos = (toDo) => { todos.push(toDo); };
  const deleteTodo = () => {};
  const makeDoneTodo = () => {};
  const editTodo = () => {};
})();

export default { manageTodos };
