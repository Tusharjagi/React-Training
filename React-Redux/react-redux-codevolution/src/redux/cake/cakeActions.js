import * as action from './cakeTypes'

export const buyCake = (number = 1) => {
    return {
        type: action.BUY_CAKE,
        payload: number
    }
}