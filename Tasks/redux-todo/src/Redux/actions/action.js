import * as actions from "./actionTypes";

export const addTodo = (data, id) => {
  return {
    type: actions.ADD_TODO,
    payload: {
      data,
      id,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: actions.DELETE_TODO,
  };
};
