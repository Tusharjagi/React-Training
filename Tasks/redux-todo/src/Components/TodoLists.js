import { useSelector } from "react-redux";

const TodoLists = () => {
  const list = useSelector((state) => state.submitReducer.list);
  console.log(list);
  // list.map((items,key) => {
  //   return (
  //     <div className="todo-lists" key={key}>
  //       <span>{items.data}</span>
  //     </div>
  //   );
  // });
  return (
    <div className="todo-lists">
      {list.map((items) => <span>{items.list}</span>)}
    </div>
  );
};

export default TodoLists;
