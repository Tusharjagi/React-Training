import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/actions/action";

// const handleOnDelete = (e) => {
//   const deletedId = e.target.id;
//   console.log(deletedId)
// };

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button className="delete-button" id={props.ids} onClick={(e) => dispatch(deleteTodo(e.target.id))}>
      Delete
    </button>
  );
};

export default DeleteButton;
