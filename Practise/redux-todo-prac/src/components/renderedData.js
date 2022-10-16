import React, { Component } from "react";

class RenderingData extends Component {
  render() {
    const items = this.props.item;
    // console.log(items);
    let str = items.map((item, i) => {
      return <div key={i}>{item}</div>;
    });
    const noItem = this.props.text;

    // if(this.props.itemArray === 0){
    //   return str;
    // }
    // else {
    // return (this.props.text);
    // };
    // const change = false;
    return (
      <>
        {/* {change ? (
          <div className="main">
            <div className="show-data">{str}</div>
          </div>
        ) : (
          <div className="main">
            <div className="show-data">{ui}</div>
          </div>
        )} */}
        <div className="main">
          <div className="show-data">{items.length ? str : noItem}</div>
        </div>
      </>
    );
  }
}

export default RenderingData;
