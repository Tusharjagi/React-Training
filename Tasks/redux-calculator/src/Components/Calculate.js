const onHandleCalculate = () => {
  console.log("calculate")
}

const Calculate = () => {
  return <button onClick={onHandleCalculate} className="calculate-button">Calculate</button>;
};

export default Calculate;
