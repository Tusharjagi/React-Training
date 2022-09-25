import Redered from "./components/renderedData";
import SubmitData from "./components/submitData";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [showText] = useState("there is no items ......");

  const handleOnChange = (event) => {
    setInputText(event.target.value);
    // console.log("on change")
  };

  const onClickHandler = () => {
    let newArray = [...textArray, inputText];
    setTextArray(newArray);
    setInputText("");
  };

  const handleOnDelete = (itemId) => {
    // console.log("handle On click");
    const setText = textArray.filter((i) => i.id !== itemId);
    // let deleteArray = [...setText,textArray]
    setTextArray(setText);
    console.log(setText)
    // const items = this.state.items.filter((c) => c.key !== itemId);
    // useState(setTextArray);
    // console.log(itemId)
    
  };

  let str = textArray.map((item, i) => {
    return (
      <div className="renderDivs" key={i}>
        {" "}
        {item}
        <span>
          <button
            onClick={() => handleOnDelete(i)}
            className="Delete-button"
          >
            Delete
          </button>
        </span>
      </div>
    );
  });

  return (
    <>
      <Redered
        renderText={showText}
        item={textArray}
        onDelete={handleOnDelete}
        str={str}
      />
      <SubmitData
        clickHandle={onClickHandler}
        changeHandle={handleOnChange}
        Text={inputText}
      />
    </>
  );
}

export default App;
