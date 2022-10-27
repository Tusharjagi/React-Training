import { useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";

const TodoLists = () => {
  const list = useSelector((state) => state.submitReducer.list);
  // console.log(list)
  const displayData = list.map((items,id) => {
    return (
      <div className="todo-lists" key={id}>
        <span className="list-number">{id + 1})</span>
        <span className="text-todo">{items}</span>
        <DeleteButton ids={id}/>
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
