const onHandleSeven = (e) => {
  console.log(e.target.value);
};

const Seven = () => {
  return (
    <button onClick={onHandleSeven} value="7" className="number-buttons">
      7
    </button>
  );
};

export default Seven;
