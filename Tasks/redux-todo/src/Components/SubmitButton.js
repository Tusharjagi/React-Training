// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions/action";

const SubmitButton = () => {
  // const dispatch = useDispatch();
  const selector = useSelector((state) => state.submitReducer.list);
  console.log(selector);
  return <button onClick={console.log("tushar")} className="submit-button">Submit</button>;
};

export default SubmitButton;
