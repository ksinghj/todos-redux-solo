import { combineReducers } from "redux";

function addTodoReducer(todos = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.text];
    default:
      return todos;
  }
}

export default combineReducers({
  todos: addTodoReducer
});
