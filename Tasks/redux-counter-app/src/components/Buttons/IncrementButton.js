import { useDispatch} from "react-redux";
import { increment } from "../Redux/Actions";
import { connect } from "react-redux"

const IncrementButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())} className="increment-button">+</button>;
};

export default IncrementButton;
