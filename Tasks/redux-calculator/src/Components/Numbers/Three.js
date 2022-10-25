const onHandleThree = (e) => {
  console.log(e.target.value);
};

const Three = () => {
  return (
    <button onClick={onHandleThree} value="3" className="number-buttons">
      3
    </button>
  );
};

export default Three;
