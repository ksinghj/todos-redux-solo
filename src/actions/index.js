export function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      id: Math.random(),
    },
  };
}
