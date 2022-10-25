const onHandlePlus = (e) => {
  console.log(e.target.value);
};

const Plus = () => {
  return (
    <button onClick={onHandlePlus} value="+" className="number-buttons">
      +
    </button>
  );
};

export default Plus;
