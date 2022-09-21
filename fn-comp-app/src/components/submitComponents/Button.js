import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <>
        <button className="submit-button" onClick={this.props.onHandleSubmit}>
          Submit
        </button>
      </>
    );
  }
}

export default SubmitButton;
