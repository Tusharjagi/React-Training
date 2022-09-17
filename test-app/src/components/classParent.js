import React from "react";
import ClChld from "./classChild";

class ClParent extends React.Component {
 

    constructor(props) {
        console.log("Inside parent constructor")
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0, isLoading: true };
        // this.handleClick = this.handleClick.bind(this);
        
    }
    parentValue = () => {
      console.log("hey");
      // this.setState((state) => ({
          // counter: state.counter++
      // }))
      let update = this.state.counter + 1;
      this.setState({counter: update})
  }
    
    // function updateNumber(){

    //     counterValue++;
    //     console.log(counterValue);
        
    // }
      
  render() {  
    console.log("Inside parent render")
    const data = this.state.isLoading ? "Loading" : "data Loaded";
    
    
    return (
        <>
        <p>Parent value = {this.state.counter}</p>
        <button onClick={this.parentValue}>Update parent value</button>
        <p>{data}</p>
        <ClChld/>
        </>
    );
  }
  componentDidMount(){
    
    setTimeout(()=>{
        console.log("updating state");
        this.setState({isLoading: false})
        // this.state.isLoading = false;
    },
    2000
    )
    console.log("Inside parent componentDidMount")
  };
  componentDidUpdate(){}
  // componentWillUnmount(){}
  componentDidCatch(){}

}

export default ClParent;
