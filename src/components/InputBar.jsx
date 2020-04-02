import React from "react";
import { connect } from "react-redux";
import { inputChange } from "../actions";

class InputBar extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo} className="ui form">
          <div className="field">
            <label style={{ marginBottom: "1em" }}>Add a todo here:</label>
            <input
              style={{ marginBottom: "1em" }}
              className="css-comp__input-bar"
              onFocus={this.handleFocus}
              ref={this.txtRef}
              type="text"
              placeholder="Walk the dog..."
              onChange={this.props.inputChange}></input>
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { handleInputChange: state.handleInputChange };
};

export default connect(mapStateToProps, { inputChange })(InputBar);
