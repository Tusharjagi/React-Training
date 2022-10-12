import * as action from "../actions/actionsTypes"

const counterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case action.INCREMENT:
      return ++state;
    case action.DECREMENT:
      return state === 0  || --state;
    case action.RESET:
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
