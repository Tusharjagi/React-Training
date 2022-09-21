import React from "react";
import Input from "./submitComponents/input";
import SubmitButton from "./submitComponents/Button";

class SubmitData extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Input value={this.props.input} OnChangeHandle={this.props.change} />
          <SubmitButton onHandleSubmit={this.props.handle} />
        </div>
      </>
    );
  }
}

export default SubmitData;
