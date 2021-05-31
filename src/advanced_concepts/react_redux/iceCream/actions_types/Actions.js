import { BUY_ICECREAM } from "./Types"

// with a payload property, we default it to 1 so that other dependent component doesn't break. when it doesn't have functionality for payload
export let buyIcecream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}


// without using a payload
// export let buyIcecream = () => {
//     return {
//         type: BUY_ICECREAM
//     }
// }