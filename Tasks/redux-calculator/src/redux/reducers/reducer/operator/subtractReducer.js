import * as actions from "../../../actions/actionTypes";

const subtractReducer = (state = {}, action) => {
    switch (action.type){
        case actions.SUBTRACT:
            return (console.log("subtract"));
        default:
            return state;
    }
}

export default subtractReducer;