import { useDispatch} from "react-redux";
import { decrement } from "../Redux/Actions";


const DecrementButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrement)} className="decrement-button">-</button>;
};

export default DecrementButton;
