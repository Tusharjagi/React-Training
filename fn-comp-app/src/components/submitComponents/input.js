import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <input
          className="input-data"
          type="text"
          id="text"
          name="text"
          value={this.props.value}
          onChange={this.props.OnChangeHandle}
        ></input>
      </>
    );
  }
}

export default Input;
