const onHandleTwo = (e) => {
  console.log(e.target.value);
};

const Two = () => {
  return (
    <button onClick={onHandleTwo} value="2" className="number-buttons">
      2
    </button>
  );
};

export default Two;
