import React from "react";
import Input from "./submitComponents/input";
import SubmitButton from "./submitComponents/Button";

class SubmitData extends React.Component {
  constructor(props){
    super(props);
    this.state  = {inputText: ''};
    // this.state = {button:''}
    // const str =  this.props.inputText;
  }
  // handleSubmit = (event) => {
  //   // event.preventDefault()
  //   console.log("button clicked")
  //   // event.target.value;
  //   // this.setState({button: ["dsfdsf"]})

  // }
  stringSubmit = (e) => {
    // console.log("string data");
    // console.log(this.state.inputText);
    const string = this.state.inputText;
    console.log(string);
    
  }
  changehandle = (event) =>{
    // console.log(event.target.value);
    // const strArr = [];
    // const str = event.target.value;
    // strArr.push(str);
    // console.log(str);
    this.setState({inputText: event.target.value})
  }
  
  
  render() {
    // console.log("submit data")
    return (
      <>
        <div class="main">
          <Input value={this.state.inputText} changeHandle={this.changehandle}/>
          <SubmitButton stringValue={this.stringSubmit}/>
        </div>
      </>
    );
  }
}

export default SubmitData;
