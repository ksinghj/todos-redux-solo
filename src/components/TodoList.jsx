import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos ? (
        todos.map(todo => {
          return <p>{todo}</p>;
        })
      ) : (
        <div>No Todos</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, {})(TodoList);
