import { useSelector } from "react-redux";

const TodoLists = () => {
  const list = useSelector((state) => state.submitReducer.list);
  // console.log(list);
  const displayData = list.map((items,key) => {
    // console.log(items)
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
      {/* {list.map((items) => <span>{items.list}</span>)} */}

    </div>
  );
};

export default TodoLists;
