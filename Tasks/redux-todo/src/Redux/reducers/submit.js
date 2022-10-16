import * as actions from "../actions/actionTypes";

const initialState = {
  list: [],
};

const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      const { data } = action.payload;
      console.log(action.payload) 
      return {
        ...state,
        list: [data,],
      };
    }
    default:
      return state;
    }
};

export default submitReducer;
