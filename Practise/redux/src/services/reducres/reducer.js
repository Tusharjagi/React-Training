import { ADD_TO_CART } from "../constants";
const initialState = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
        // console.log(action)
      return [
        ...state,
        {cardData: action.data},
    ];
      break;
    default:
      return state;
  }
}
