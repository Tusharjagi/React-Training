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
    // event.preventDefault()
    // event.target.value;
    // this.setState({button: ["dsfdsf"]})

  // }
  handleSubmit = () => {
    // const strArr = [];
    const string = this.state.inputText;
    // strArr.push(string);
    console.log(string);
    this.setState({inputText: ''})

    
  }
  changeHandle = (event) =>{
    // console.log(event.target.value);
    // const strArr = [];
    // const str = event.target.value;
    // strArr.push(str);
    // console.log(str);
    this.setState({inputText: event.target.value})
    
  }
  
  
  render() {
    return (
      <>
        <div class="main">
          <Input value={this.state.inputText} OnChangeHandle={this.changeHandle}/>
          <SubmitButton onHandleSubmit={this.handleSubmit}/>
        </div>
      </>
    );
  }
}

export default SubmitData;
