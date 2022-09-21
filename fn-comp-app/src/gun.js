import { useState } from "react";

function Test() {
    const [text, setText] = useState("");
    const [list, setist] = useState([]);
    handleSubmit  = () => {
        setText("tushar")
    }
  return <div onClick={handleSubmit}> {text}  </div>;
}
