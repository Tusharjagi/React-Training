const onHandleClear = () => {
  console.log("clear");
};

const Clear = () => {
  return (
    <button onClick={onHandleClear} className="clear-button">
      Clear
    </button>
  );
};

export default Clear;
