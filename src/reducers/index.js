import { combineReducers } from "redux";

function AddTodoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
}

function handleInputChange(inputValue = "", action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return action.payload;

    default:
      return inputValue;
  }
}

export default combineReducers({
  add: AddTodoReducer, // TODO: should be called on submit, change name to addTodo??
  handleInputChange: handleInputChange
});
