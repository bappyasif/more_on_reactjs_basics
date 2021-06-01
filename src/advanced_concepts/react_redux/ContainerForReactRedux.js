// to use react-redux within our redux store, we'll need to use Provider from react-redux
import { Provider } from "react-redux";
import React from "react";
import CakeContainer from "./cake/CakeContainer";
// how would Provider which Store to be concerned about, for that we'll have to pass our store as a prop to Component Tree
import { cakeStore } from "./cake/store/CakeStore";
import IcecreamContainer from "./iceCream/IcecreamContainer";
import { icecreamStore } from "./iceCream/store/IcecreamStore";
import { WithHooksCakeContainer } from "./cake/WithHooksCakeContainer";
import { WithHooksIcecreamContainer } from "./iceCream/WithHooksIcecreamContainer";
import { combinedStore } from "./combined_reducers/store/storeCombined";
import CombinedCakeContainer from "./combined_reducers/CakeContainer";
import CombinedIcecreamContainer from "./combined_reducers/IcecreamContainer";
import { CakesContainerWithHooks } from "./combined_reducers/CakesContainerWithHooks";
import { IcecreamsContainerWithHooks } from "./combined_reducers/IcecreamsContainerWithHooks";
import NewContainerForCake from "./combined_reducers/NewContainerForCake";
import NewContainerForIcecream from "./combined_reducers/NewContainerForIcecream";
import { NewCakeHooksContainer } from "./combined_reducers/NewCakeHooksContainer";
import { NewIcecreamHooksContainer } from "./combined_reducers/NewIcecreamHooksContainer";
import PropsAndStateContainer from "./combined_reducers/StateAndDispatchTogether";
import PropsAndDispatchItem from "./combined_reducers/SoloDispatchAnItem";
import  UserContainer  from "./async_actions/UserContainer";
import {userStore} from "./async_actions/Store"
import SoloContainer from "./async_actions/SoloContainer";

export function ContainerForReactRedux() {
  return (
    // through this store prop we're making our redux store available to our component tree
    <div>
      {/* without using react hooks */}
      <Provider store={cakeStore}>
        <p>using react with redux</p>
        <CakeContainer />
      </Provider>
      <Provider store={icecreamStore}>
        <p>using react-redux for icecreamStore</p>
        <IcecreamContainer />
      </Provider>
      {/* with using react hooks */}
      <Provider store={cakeStore}>
        <WithHooksCakeContainer />
      </Provider>
      <Provider store={icecreamStore}>
          <WithHooksIcecreamContainer />
      </Provider>
      {/* using combined reducers for cake and icecream */}
      <p>using multiple reducers in a single redux store</p>
      <Provider store={combinedStore}>
          <CombinedCakeContainer />
          <CombinedIcecreamContainer />
          <CakesContainerWithHooks />
          <IcecreamsContainerWithHooks />
          <NewContainerForCake />
          <NewContainerForIcecream />
          <NewCakeHooksContainer />
          <NewIcecreamHooksContainer />
          <p>props dispatching with states</p>
          <PropsAndStateContainer cake />
          <PropsAndStateContainer />
          <p>just dispatching without states</p>
          <PropsAndDispatchItem />
          <PropsAndDispatchItem cake />
          {/* async usage */}
          <UserContainer />
      </Provider>
      <Provider store={userStore}>
        <SoloContainer />
      </Provider>
    </div>
  );
}
