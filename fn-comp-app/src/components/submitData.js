import Button from "./submitComponents/button";
import Input from "./submitComponents/input";
// import { useState } from "react";

function SubmitData(props) {
    // const [inputText, setInputText] = useState("")
    // const [textArray, setTextArray] = useState([])

    // const handleOnChange = (event) => {
    //     setInputText(event.target.value)
    //     // console.log(event.target.value)
    // }

    // const onClickHandler = () => {
    //     const newArray = [...textArray,inputText]
    //     setTextArray(newArray);
    //     setInputText("")
    //     // setTextArray("")
    //     // setTextArray(textArray => [...Array,textArray]);
    //     // setTextArray(prev => ([...prev,setInputText]))
    //     // newArray.push(inputText);
    //     // setTextArray(prev => ([...prev,setTextArray]))
    //     // console.log();
    //     console.log(newArray);
    //     // console.log(news)
    //     console.log("Clicked")
    // }

    return(
        <div className="main"> 
         <Input value={props.Text} onChanges={props.changeHandle}/>
         <Button clickHandler={props.clickHandle}/>
         {/* <Input value={inputText} onChanges={handleOnChange} />
         <Button clickHandler={onClickHandler}/> */}
        </div>
    )
}

export default SubmitData;