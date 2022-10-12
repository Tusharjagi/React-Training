import * as action from "./actionsTypes"
export const increment = () => {
  return {
    type: action.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: action.DECREMENT,
  };
};

export const reset = () => {
  return {
    type: action.RESET,
  };
};
