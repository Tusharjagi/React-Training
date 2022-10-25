import { useDispatch } from "react-redux";
import { eight } from "../../redux/actions/actions";

// const onHandleEight = (e) => {
//   console.log(e.target.value);
// };

const Eight = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => dispatch(eight(e.target.value))}
      value="8"
      className="number-buttons"
    >
      8
    </button>
  );
};

export default Eight;
