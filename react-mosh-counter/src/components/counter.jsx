import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // imageUrl: "https://picsum.photos/200"
  // };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  //   style={{ fontSize:30}}
  // };

  // constructor(){
  //   super();
  //   // console.log("constructor" , this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag, i) => (
  //         <li key={i}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = (product) => {
  //   // this.state.count++;
  //   // console.log(product)
  //   // this.props.value = 0; ---value cannot assing , props are read only
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log("increment Clicked",this)
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({id: 1});
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount(){
    console.log("Counter - Unmount");
  }

  render() {
    // let classes = this.getBadgeClasses();
    // console.log(this.props.children)
    console.log("Counter - Rendered")
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => (this.props.onDelete(this.props.counter.id))}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    const head = <h1>Zero</h1>;
    return count === 0 ? head : count;
    // -------function are not valid as a react child-------
  }
}

export default Counter;
