import React, { Component } from "react";

class RenderingData extends Component {
  constructor(props){
    super(props);
    this.state = {
        item : "There is no items in list ....",
        // itemArray : ["this is items","dsfsafd"],
    }
    
  }
  

  render() {
    
    return (
      <div class="main">
        <div class="show-data">{this.state.itemArray}</div>
      </div>
    );
  }
}
export default RenderingData;
