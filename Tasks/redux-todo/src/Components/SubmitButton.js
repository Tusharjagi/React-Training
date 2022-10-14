// import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions/action";

const SubmitButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(addTodo())} className="submit-button">Submit</button>;
};

export default SubmitButton;
 