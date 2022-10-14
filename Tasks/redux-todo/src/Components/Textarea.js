import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions/action";

const Textarea = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  return (
    <>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="text-area"
        cols="40"
        rows="4"
      ></textarea>
      <button onClick={() => dispatch(addTodo(data))} className="submit-button">
        Submit
      </button>
    </>
  );
};

export default Textarea;
