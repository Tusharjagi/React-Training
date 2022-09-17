import React from "react";

class SubmitButton extends React.Component {
  // constructor (props){
  //   super(props);
  //   // this.state = {submit: ['']}
    
  // }

  render() {
    // value={this.props.value}
    // let value = this.props.value;

    return (
      <>
        <button class="submit-button" onClick={this.props.stringValue}>Submit</button>
      </>
    );
  }
}

export default SubmitButton;
