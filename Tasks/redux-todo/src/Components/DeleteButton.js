const DeleteButton = () => {
  const handleOnDelete = (e) => {
    console.log("click on delete");
  };
  return (
    <button className="delete-button" onClick={(e) => handleOnDelete(e)}>
      Delete
    </button>
  );
};

export default DeleteButton;
