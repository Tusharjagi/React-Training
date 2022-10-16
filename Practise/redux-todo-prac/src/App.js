import RenderingData from "./components/renderedData";
import SubmitData from "./components/SubmitData";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", itemArray: [], text : "there is no items ......" };

  }

  changeHandle = (event) => {
    this.setState({ inputText: event.target.value });
    // const [itemArray, setItemArray] = useState([]);
  };


  // push =() => {
  //   this.state.itemArray.push(this.state.inputText)
  // }


  handleSubmit = () => {
    // const string = this.state.inputText;
    // if(this.state.itemArray.length){
      // this.state.itemArray.push(this.state.inputText)
    // }
    // else{
    //   this.state.itemArray.push(this.state.text)
    // }
    // const [itemArray,setItemArrya] = useState([]);
    // setItemArrya([...itemArray,this.state.inputText]);
    this.setState({itemArray: [...this.state.itemArray,this.state.inputText]})
    // console.log(data);
    // console.log(this.state.itemArray)
    this.setState({ inputText: "" });
  };


  render() {
    return (
      <>
        
        <RenderingData item={this.state.itemArray} text={this.state.text} />
        <SubmitData
          handle={this.handleSubmit}
          input={this.state.inputText}
          change={this.changeHandle}
        />
      </>
    );
  }
}

export default App;