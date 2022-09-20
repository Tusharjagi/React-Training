import React, { Component } from "react";

class RenderingData extends Component {
  render() {
    const items = this.props.item;
    // console.log()
    // const itemList = items.map((item) => {
    //   console.log(itemList)
    // })
    items.map((value, index) => {
      <div className="main">
        <div className="show-data">
          {value} and {index}
        </div>
      </div>;
    });

    return (
      <div className="main">
        <div className="show-data">{items}</div>
      </div>
    );
  }
}

export default RenderingData;
