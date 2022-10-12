import { useDispatch } from "react-redux";
import { increment } from "../../redux/actions/actions";

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <button className="increment-button" onClick={() => dispatch(increment())}>
      Increase
    </button>
  );
};

export default Increment;
