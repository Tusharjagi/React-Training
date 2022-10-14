import * as actions from "./actionTypes";

export const addTodo = (data) => {
    return{
        type: actions.ADD_TODO,
        payload :{
            id: new Date().getTime().toString(),
            data
        }
    }
}