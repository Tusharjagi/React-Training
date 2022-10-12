import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/actions/actions";

const Counter = () => {
    const counter = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
  return (
    <>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())} >Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
