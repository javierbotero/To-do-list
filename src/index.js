import { todos, addTodos, todo } from './todos';

let myVar;
const myObj = todo('My task', 'Some description',
  '2020-10-27',
  2,
  ['first note', 'another note'],
  [{ miniTask: 'clean bed', done: false }, { miniTask: 'clean bed', done: false }]);
const myObj2 = todo(myVar,
  'Some description',
  myVar,
  2,
  myVar,
  myVar);
addTodos(myObj);
addTodos(myObj2);
console.log(todos);
console.log(todos[1].getFinished());

