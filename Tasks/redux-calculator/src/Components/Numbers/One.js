const onHandleOne = (e) => {
  console.log(e.target.value);
};

const One = () => {
  return (
    <button onClick={onHandleOne} value="1" className="number-buttons">
      1
    </button>
  );
};

export default One;
