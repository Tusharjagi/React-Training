const onHandleNine = (e) => {
  console.log(e.target.value);
};

const Nine = () => {
  return (
    <button onClick={onHandleNine} value="9" className="number-buttons">
      9
    </button>
  );
};

export default Nine;
