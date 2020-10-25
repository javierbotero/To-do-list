import { todos, projects, todo } from './todos';
import { manageTodos } from './manageTodos';

const myTodo = todo();
manageTodos.addTodos(myTodo);
console.log(todos[0].getProject());
manageTodos.addProject('Development');
console.log(projects);
myTodo.setProject(1);
console.log(myTodo.getProject());
console.log(projects[myTodo.getProject()]);
