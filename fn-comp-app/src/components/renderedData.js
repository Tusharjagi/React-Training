function Redered(props) {
  const items = props.item;
  // console.log(items);
  let str = items.map((item, i) => {
    return <div key={i}>{item}</div>;
  });
  const noStr = props.renderText;
  return (
    <div className="main">
      <div className="show-data">{items.length ? str : noStr}</div>
    </div>
  );
}

export default Redered;
