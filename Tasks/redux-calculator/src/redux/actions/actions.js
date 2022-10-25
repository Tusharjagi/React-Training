import * as actions from "./actionTypes";

export const display = (data) => ({
  type: actions.UPDATE,
  payload: {
    input: data,
    click: "number",
  },
});

export const add = (data) => ({
  type: actions.ADD,
  payload: {
    click: "operator",
  },
});

export const subtract = (data) => ({
  type: actions.SUBTRACT,
  payload: {
    click: "operator",
  },
});

export const clear = (data) => ({
  type: actions.CLEAR,
  payload: {
    click: "clear",
  },
});

export const calculate = (data) => ({
  type: actions.CALCULATE,
  payload: {
    click: "calculate",
  },
});
