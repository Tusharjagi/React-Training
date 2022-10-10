import {ADD_TO_CART} from '../constants'
export const addToCart = (data) => {
    // console.log(data)
    return {
        type: ADD_TO_CART,
        data
    }
}

// export const removeToCart = () => {
//     return{
//         type: "REMOVE_TO_CART",
//         data
//     }
// }