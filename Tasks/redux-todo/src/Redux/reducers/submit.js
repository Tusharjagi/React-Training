import * as actions from "../actions/actionTypes";

const initialState = {
  list: [],
};
const submitReducer = (state = initialState, action) => {
  // console.log(state.list)
  switch (action.type) {
    case actions.ADD_TODO: {
      const { data } = action.payload;
      // console.log(id)
      return {
        ...state,
        list: [...state.list, data],
      };
    }
    case actions.DELETE_TODO: {
      const id = action.payload;
      // console.log(id.id);
      return {
        // // ...state,
        // list: [
        //   ...state.list.filter((ite)
        // ],
      };
    }
    default:
      return state;
  }
};

export default submitReducer;
