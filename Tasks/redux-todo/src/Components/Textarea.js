import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions/action";

const Textarea = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([])
  console.log(inputText)
  // console.log(data)

  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnSubmit = () => {
    setData({data:[...data,setInputText]})
  }

  return (
    <>
      <textarea
        value={inputText}
        onChange={(e) => handleOnChange(e)}
        className="text-area"
        cols="40"
        rows="4"
      ></textarea>
      <button
        onClick={() => {
          handleOnSubmit()
          setInputText("");
        }}
        className="submit-button"
      >
        Submit
      </button>
    </>
  );
};

export default Textarea;
