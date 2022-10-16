import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions/action";

const Textarea = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  
  // const handleOnChange = (e) => {
  //   setInputText(e.target.value);
  // };

  return (
    <>
      <textarea
        value={inputText}
        onChange={(e) => setInputText( e.target.value)}
        className="text-area"
        cols="40"
        rows="4"
      ></textarea>
      <button
        onClick={() => {
          dispatch(addTodo(inputText),
          setInputText(""));
        }}
        className="submit-button"
      >
        Submit
      </button>
    </>
  );
};

export default Textarea;
