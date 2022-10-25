const onHandleSix = (e) => {
  console.log(e.target.value);
};

const Six = () => {
  return (
    <button onClick={onHandleSix} value="6" className="number-buttons">
      6
    </button>
  );
};

export default Six;
