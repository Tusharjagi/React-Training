function Input(props) {
  return (
    <input
      className="input-data"
      type="text"
      id="text"
      name="text"
      value={props.value}
      onChange={props.onChanges}
    ></input>
  );
}

export default Input;
