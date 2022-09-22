import Redered from "./components/renderedData";
import SubmitData from "./components/submitData";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [showText, setShowText] = useState("there is no items ......")

  const handleOnChange = (event) => {
    setInputText(event.target.value);
    // console.log("on change")
  };

  const onClickHandler = () => {
    let newArray = [...textArray, inputText];
    setTextArray(newArray);
    setInputText("");
    console.log(newArray);
    // console.log("Clicked")
  };

  return (
    <>
      <Redered />
      <SubmitData clickHandle={onClickHandler} changeHandle={handleOnChange} Text={inputText}/>
    </>
  );
}

export default App;
