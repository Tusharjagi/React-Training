import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/actions/action";

const Counter = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.countReducers);
  return (
    <>
      <h1>Counter APP</h1>
      <h2>This is count : {selector}</h2>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
