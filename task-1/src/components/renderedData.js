import React, { Component } from "react";

class RenderingData extends Component {
  
  render() {
    const items = this.props.item;
    // const itemList = items.map((item) => {
    //   console.log(itemList)
    // })

    return (
      <div class="main">
        <div class="show-data" >{this.props.item}</div>
        
        
      </div>
    );
  }
}

export default RenderingData;
