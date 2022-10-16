import { useSelector } from "react-redux";

const TodoLists = () => {
  const list = useSelector((state) => state.submitReducer.list);
  const displayData = list.map((items,key) => {
    return (
      <div className="todo-lists" key={key}>
        <span className="list-number">{key})</span>
        <span>{items}</span>
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
