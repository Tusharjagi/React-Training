const onHandleSubtract = (e) => {
  console.log(e.target.value);
};

const Subtract = () => {
  return (
    <button onClick={onHandleSubtract} value="-" className="number-buttons">
      -
    </button>
  );
};

export default Subtract;
