import Button from "./submitComponents/button";
import Input from "./submitComponents/input";
import { useState } from "react";

function SubmitData() {
    const [inputText, setInputText] = useState("")
    const [textArray, setTextArray] = useState([])
    let newArray = [];

    const handleOnChange = (event) => {
        setInputText(event.target.value)
        console.log(event.target.value)
    }

    const onClickHandler = () => {
        // setTextArray(textArray => [...Array,textArray]);
        // setTextArray(prev => ([...prev,setInputText]))
        // newArray.push(inputText);
        console.log("Clicked")
    }

    return(
        <div className="main">
         <Input value={inputText} onChanges={handleOnChange}/>
         <Button clickHandler={onClickHandler}/>
        </div>
    )
}

export default SubmitData;