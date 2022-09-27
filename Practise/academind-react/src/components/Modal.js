const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancle();
  };
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className="btn btn--alt" onClick={cancelHandler} >Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
};

export default Modal;
