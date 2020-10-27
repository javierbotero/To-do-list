import { domQueries } from './domQueries';
import { todos, todo, projects } from './todos';
import { displayToDom } from './displayToDom';

const events = (() => {
  const makeBtnsClickable = () => {
    domQueries.grabBtnAddProjects().addEventListener('click', displayToDom.displayFormTodo);
  };

  const makeFormTodoCLose = () => {
    [domQueries.grabBox(), domQueries.grabCloseFormTodo()].forEach(el => el.addEventListener('click', displayToDom.changeClassFormTodo));
  };

  return {
    makeBtnsClickable,
    makeFormTodoCLose,
  };
})();

export { events };