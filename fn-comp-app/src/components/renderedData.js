import React, { Component } from "react";

class RenderingData extends Component {
  render() {
    const items = this.props.item;
    let str = items.map((item, i) => {
      return <div key={i} className="block">{item}</div>;
    });
    const noItem = this.props.text;
    return (
      <>
        <div className="main">
          <div className="show-data">{items.length ? str : noItem}</div>
        </div>
      </>
    );
  }
}

export default RenderingData;
