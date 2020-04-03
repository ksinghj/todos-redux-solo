import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos ? (
        todos.map(todo => {
          return (
            <TodoItem
              key={todo}
              todo={todo}
              // deleteTodo={deleteTodo}
              style={{ background: "grey" }}
            />
          );
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
