const onHandleFive = (e) => {
  console.log(e.target.value);
};

const Five = () => {
  return (
    <button
      onClick={onHandleFive}
      value="5"
      className="number-buttons"
    >
      5
    </button>
  );
};

export default Five;
