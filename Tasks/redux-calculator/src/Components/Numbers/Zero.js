const onHandleZero = (e) => {
  console.log(e.target.value);
};

const Zero = () => {
  return (
    <button onClick={onHandleZero} value="0" className="number-buttons">
      0
    </button>
  );
};

export default Zero;
