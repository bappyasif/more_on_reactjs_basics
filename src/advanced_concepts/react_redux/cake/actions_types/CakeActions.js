import { BUY_CAKE } from "./ActionTypes"

// with a payload property
export let buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

// without any payload property
// export let buyCake = () => {
//     return {
//         type: BUY_CAKE
//     }
// }