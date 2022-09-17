import React from "react";

class Input extends React.Component {
  //  constructor (props){
  //   super(props)
    // this.state  = {inputText: ''};
  //  }

  render() {
    // const [text] = state('');
    // document.getElementById("text").value;
    // console.log("rendering input data");
    return (
      <>
        <input
          class="input-data"
          type="text"
          id="text"
          name="text"
          value={this.props.value}
          onChange={this.props.OnChangeHandle}
          // onFocus={this.value=""}
        ></input>
      </>
    );
  }
}

export default Input;
