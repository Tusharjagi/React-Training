import React, { Component } from "react";

class ClChld extends Component {
  constructor(props) {
    console.log("Inside child constructor");
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  childValue = () => {
    let update = this.state.counter + 1;
    this.setState({counter: update})
  }

  render() {
    console.log("Inside child render");
    return (
      <>
        {/* <p>Child class</p> */}

        <p>Child value = {this.state.counter}</p>
        <button onClick={this.childValue}>update child value</button>
      </>
    );
  }
  componentDidMount() {
    console.log("Inside child componentDidMount");
  }
}

export default ClChld;
