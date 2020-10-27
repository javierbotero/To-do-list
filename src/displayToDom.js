import { domQueries } from './domQueries';
import { events } from './events';

const displayToDom = (() => {
  const displayLayout = () => {
    const html = `
    <h1>My Todos</h1>
    <div id="container">
        <div id="projects">
        </div>
        <div id="todos">
        </div>
    </div>
    `;
    domQueries.grabBody().innerHTML = html;
  };
  const displayBtnAddProject = () => {
    const btn = `
        <button type="button" id="display-form-projects">
        Add a new Project
        </button>
    `;
    domQueries.grabProjectsDiv().innerHTML += btn;
  };
  const displayBtnAddTodo = () => {
    const btn = `
    <button type="button" id="display-form-todos">
        Add a new Todo
    </button>
    `;
    domQueries.grabTodosDiv().innerHTML += btn;
  };
  const displayProjects = () => {};
  const displayTodos = () => {};
  const displayFormProject = () => {};
  const displayFormTodo = () => {
    const form = `
      <div id="box" class="">
        <div id="close-form-todo">X</div>
        <form id="form-todo">
          <label for="title">Title</label>
          <input type="text" id="title" placeholder="Title">
          <label for="description">description</label>
          <input type="text" id="description" placeholder="description">
          <input type="submit" id="submit-form-todo" value="Submit">
        </form>
      </div>
    `;
    domQueries.grabContainer().innerHTML += form;
    events.makeFormTodoCLose();
  };
  const changeClassFormTodo = () => {
    const box = domQueries.grabBox();
    if (box.classList.contains('hide-form-todo')) {
      console.log(box);
      box.classList.remove('hide-form-todo');
    } else {
      box.classList += 'hide-form-todo';
    }
  };

  return {
    displayLayout,
    displayBtnAddProject,
    displayBtnAddTodo,
    displayFormTodo,
    changeClassFormTodo,
  };
})();


export { displayToDom };