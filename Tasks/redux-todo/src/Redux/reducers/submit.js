import * as actions from "../actions/actionTypes";

const initialState = {
  list: [],
};

const submitReducer = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case actions.ADD_TODO: {
      const { data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          data
        ],
      };
    }
    default:
      return state;
  }
};

export default submitReducer;
