import { todos, projects } from './todos';

const manageTodos = (() => {
  const addTodos = (todo) => { todos.push(todo); };
  const deleteTodo = (index) => { todos.splice(index, 1); };
  const addProject = (name) => { projects.push(name); };
  const deleteProject = (index) => {
    let message = '';
    if (index > 0) {
      todos.forEach((todo) => {
        if (todo.getProject() === index) {
          todo.setProject(projects[0]);
        }
      });
      projects.splice(index, 1);
      message = 'Project deleted, todos belonging to this project now belongs to the Default Project';
    } else {
      message = 'This project is the default project, can not be erased.';
    }
    return message;
  };

  return {
    addTodos,
    deleteTodo,
    addProject,
    deleteProject,
  };
})();

export { manageTodos };