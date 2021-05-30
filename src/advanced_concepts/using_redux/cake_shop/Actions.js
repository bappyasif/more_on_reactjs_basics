// actions are usually Strings, defined as constants for app to use
// in redux however, action is an object with a property named type which will conatin that constant string value in it

// Action String
export let BUY_CAKE = "BUY_CAKE";

// Action Object
// {
//     type: BUY_CAKE
//     // we can also have other necessary information as we see fit
//     info: "redux action"
// }

// in redux we also go a step further in Action, to use an action creator to return an Action to caller
// Action creator
export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "redux action",
  };
}
// export let buyCake = () => {
//     return {
//         type: BUY_CAKE,
//         info: "redux action"
//     }
// }
