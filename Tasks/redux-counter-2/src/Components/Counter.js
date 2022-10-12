import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/actions/actions";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header-wrapper">
        <h1 className="header">Counter</h1>
        <h1 className="count">{counter}</h1>
      </div>
      <button className="increment-button" onClick={() => dispatch(increment())}>Increase</button>
      <button className="decrement-button" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="reset-button" onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
