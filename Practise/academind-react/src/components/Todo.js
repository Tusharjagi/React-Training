import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleDelete = () => {
        // console.log("Handle click")
        // console.log(props.text);
        setModalIsOpen(true);

    }

    const closeModalHandler = () => {
        setModalIsOpen(false)

    }

    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete} >Delete</button>
        </div>
        {modalIsOpen && <Modal onCancle={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancle={closeModalHandler} />}
      </div>
    );
}
 
export default Todo;