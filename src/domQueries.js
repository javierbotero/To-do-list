const domQueries = (() => {
  const grabTitleTodo = () => document.getElementById('title');
  const grabDescriptionTodo = () => document.getElementById('description');
  const grabBody = () => document.body;
  const grabProjectsDiv = () => document.getElementById('projects');
  const grabTodosDiv = () => document.getElementById('todos');
  const grabBtnAddProjects = () => document.getElementById('display-form-projects');
  const grabBtnAddTodos = () => document.getElementById('display-form-todos');
  const grabContainer = () => document.getElementById('container');
  const grabFormTodo = () => document.getElementById('form-todo');
  const grabCloseFormTodo = () => document.getElementById('close-form-todo');
  const grabBox = () => document.getElementById('box');

  return {
    grabTitleTodo,
    grabDescriptionTodo,
    grabBody,
    grabProjectsDiv,
    grabTodosDiv,
    grabBtnAddProjects,
    grabBtnAddTodos,
    grabContainer,
    grabFormTodo,
    grabCloseFormTodo,
    grabBox,
  };
})();

export { domQueries };