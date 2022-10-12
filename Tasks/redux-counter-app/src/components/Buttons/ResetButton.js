import { useDispatch } from "react-redux";
import { reset } from "../Redux/Actions";

const ResetButton = () => {
    const dispatch = useDispatch();
    return<button onClick={() => dispatch(reset()) } className="reset-button">Reset</button>
}
export default ResetButton;