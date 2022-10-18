import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";

const TodoLists = () => {
  const list = useSelector((state) => state.submitReducer.list);
  const displayData = list.map((items,key) => {
    return (
      <div className="todo-lists" key={key}>
        <span className="list-number">{key + 1})</span>
        <span className="text-todo">{items}</span>
        <DeleteButton/>
        <hr className="horizontal-line"/>
      </div>
    );
  });
  return (
    <div className="todo-lists">
      {displayData}
    </div>
  );
};

export default TodoLists;
