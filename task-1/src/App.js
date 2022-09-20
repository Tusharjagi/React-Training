import RenderingData from "./components/renderedData";
import SubmitData from "./components/SubmitData";
import React,{useState} from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", itemArray: [] };

  }


  changeHandle = (event) => {
    this.setState({ inputText: event.target.value });
    // const [itemArray, setItemArray] = useState([]);
  };

  handleSubmit = () => {
    // const string = this.state.inputText;
    this.state.itemArray.push(this.state.inputText)
    
    console.log(this.state.itemArray);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <>
        <RenderingData item={this.state.itemArray}/>
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
