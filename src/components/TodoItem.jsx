import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div
      className="ui grid"
      style={{ background: "rgba(1,1,1,0.04)", margin: "0.5em 0" }}>
      <div className="eight wide column">{todo}</div>
      <div className="eight wide column float-right">
        <button
          // TODO: Add deleteTodo functionality
          type="button"
          className="ui button right floated css-btn__delete-todo">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
