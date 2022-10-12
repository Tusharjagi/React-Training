const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return state === 0  || --state;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
