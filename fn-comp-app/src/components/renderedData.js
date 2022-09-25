function Redered(props) {
  // const items = props.item;
  // const noStr = props.renderText;
  return (
    <div className="main">
      <div className="show-data">{props.item.length ? props.str : props.renderText}</div>
    </div>
  );
}

export default Redered;
