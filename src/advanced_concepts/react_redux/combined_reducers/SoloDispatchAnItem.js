import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../cake/actions_types/CakeActions";
import { buyIcecream } from "../iceCream/actions_types/Actions";

function PropsAndDispatchItem(props) {
    console.log(props, "dispatch")
  return (
    <div>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

let mapDispatchToProps = (dispatch, ownProps) => {
  let dispatchItem = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());
  return { buyItem: dispatchItem };
};

export default connect(null, mapDispatchToProps)(PropsAndDispatchItem);
