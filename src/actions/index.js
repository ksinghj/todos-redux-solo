export function addTodo(text) {
  return { type: "ADD_TODO", text };
}

export const inputChange = e => {
  console.log("inputChange action called");
  return { type: "INPUT_CHANGE", payload: e.target.value };
};
