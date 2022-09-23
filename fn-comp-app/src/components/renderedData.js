function Redered(props) {
  const items = props.item;
  let str = items.map((item, i) => {
    return <div key={i} > {console.log(i)} {item}</div>;
  });
  const noStr = props.renderText;
  return (
    <div className="main">
      <div className="show-data">{items.length ? str : noStr}</div>
    </div>
  );
}

export default Redered;
