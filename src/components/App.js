import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <InputBar />
        <TodoList />
      </div>
    );
  }
}

export default App;
