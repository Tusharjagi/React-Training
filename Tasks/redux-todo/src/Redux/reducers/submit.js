import * as actions from "../actions/actionTypes";

const initialData = {
  list: [],
};

const submitReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      const { id, data } = action.payload;

      return {
        ...state,
        data: [
            {
                id,
                data
            }
        ],
      };
    }
    default: return state;
  }
};

export default submitReducer;
