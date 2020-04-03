import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class InputBar extends React.Component {
  state = { inputValue: "" };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo} className="ui form">
          <div className="field">
            <label style={{ marginBottom: "1em" }}>Add a todo here:</label>
            <input
              style={{ marginBottom: "1em" }}
              className="css-comp__input-bar"
              onFocus={this.handleFocus}
              ref={this.txtRef}
              type="text"
              placeholder="Walk the dog..."
              onChange={this.handleInputChange}></input>
            <button onClick={this.addTodo} className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { addTodo: state.addTodo };
};

export default connect(mapStateToProps, { addTodo })(InputBar);
