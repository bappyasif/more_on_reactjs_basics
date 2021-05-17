import { useLoginStatusLogic } from "./useLoginStatusLogic";

export let UserLoginStatusText = (props) => {
  let [isOnline, x, y] = useLoginStatusLogic(props.id);
//   console.log(y, ":");
  return isOnline ? "Logged In" : "Logged Out";
};

export let ButtonText = (props) => {
  let [isOnline, x, y] = useLoginStatusLogic(props.id);
//   console.log(y, "||");
  return isOnline ? "logout" : "login";
};

export let ButtonColor = (id) => {
  let [isOnline, x, y] = useLoginStatusLogic(id);
//   console.log(y, "\\");
  return isOnline ? y : y;
};

// export let UserLoginStatusText = () => {
//   let [isOnline, x] = useLoginStatusLogic();
// //   console.log(isOnline);
//   return isOnline ? "Logged In" : "Logged Out";
// };

// export let ButtonText = () => {
//   let [isOnline,x] = useLoginStatusLogic();
// //   console.log(isOnline);
//   return isOnline ? "logout" : "login";
// };
