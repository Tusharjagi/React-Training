import { useDispatch } from "react-redux";
import { decrement } from "../../redux/actions/actions";

const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <button className="decrement-button" onClick={() => dispatch(decrement())}>
      Decrement
    </button>
  );
};

export default Decrement;
