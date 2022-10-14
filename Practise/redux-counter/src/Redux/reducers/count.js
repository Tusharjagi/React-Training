import * as actions from "../actions/actionTypes"

const countReducers = (state = 0, action) => {
    switch (action.type){
        case actions.INCREMENT: {
            return ++state;
        }
        case actions.DECREMENT: {
            return --state;
        }
        case actions.RESET:{
            return state = 0
        }
        default: {
            return state;
        }
    }
}

export default countReducers;