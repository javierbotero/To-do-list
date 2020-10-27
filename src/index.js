import { displayToDom } from './displayToDom';
import { events } from './events';
import './assets/style.css';

displayToDom.displayLayout();
displayToDom.displayBtnAddTodo();
displayToDom.displayBtnAddProject();
events.makeBtnsClickable();
