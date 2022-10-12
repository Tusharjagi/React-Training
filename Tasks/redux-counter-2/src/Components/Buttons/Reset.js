import { useDispatch } from "react-redux";
import { reset } from "../../redux/actions/actions";

const Reset = () => {
  const dispatch = useDispatch();
  return (
    <button className="reset-button" onClick={() => dispatch(reset())}>
      Reset
    </button>
  );
};

export default Reset;
