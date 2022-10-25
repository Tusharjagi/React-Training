const onHandleFour = (e) => {
  console.log(e.target.value);
};

const Four = () => {
  return (
    <button
      onClick={onHandleFour}
      value="4"
      className="number-buttons"
    >
      4
    </button>
  );
};

export default Four;
