import React from 'react'

export function ReduxContainer() {
    // redux is a predictable state container for javascript apps
    // as in, managing state of our application in a predictable way
    
    // Why use redux instead of react state?
    // in react state management can become cumbersome when same state needs to passed down to differernt layers in Component Tree at different level making props passed down through components, even through those which doesn't need to know about this but has to passed down to those which requires it, that's where redux shines
    // redux in other hand keeps all state information in a place known as Redux State Container, outside of App Tree and allows access to those components to have access to state values who requires it and not passing down props through components tree
    // even though in recent version of react, using hooks like useContext, useReducer could do pretty much what Redux alone has to offer but previously Redux was only sole solution for handling states management like that
    // as of now, there are still legacy code which written using Redux, and knowing how to code using Redux will help us code better for our Application regardless

    // a real world scenario: Cake Shop
    /**
     * Shop    ---- In Redux known as "Store" ----- holds state of our application
     * Intention to BUY_CAKE  ---- In Redux known as "Action"  ---- Describes changes what happened
     * Shopkepper  ---- In Redux known as "Reducer"  ---- Ties store and actions together, to manage app states as expected
     */

    // Three principles of writin code using redux for state management
    /**
     * <> State of our whole application is stored in an object tree within a single store
     * as in, maintaining our application state in a single object which would be managed by Redux store
     * lets assume, we're tracking number of cakes in our Cake Shop, our state container would look liek this {numberOfCakes:11}
     * 
     * <> State is read only and only way to change state is to emit an action, an object describing what happened
     * as in, to update state of our app, we need to let Redux know about that with an action, we're not allowed to update state directly but through an action, describing our intention to store
     * let's assume, we want to let shopkepper know about our action - BUY_CAKE, {type: BUY_CAKE}
     * 
     * <> To specify how satte tree is transformed by actions, we write pure reducers function to describe what happens for different actions, to update state of our application
     * this reducer function takes, two arguments, previous state and action and returns a newState based on that, in our scenario, Reducer is Shopkeeper, Action is 'BUY_CAKE'
     * e.g.previousState, action => newState
     * 
     * to visulaize these as an overview of Redux:
     * Application can not update Redux state directly rather passing this intention (a dispatch) to reducer to as Action, which updates Redux Store
     *  ->App --dispatch-> Action --to-> Reducer --updates-> Redux Store (State) --subscribed to-> Application
     */
    return (
        <div>
            <p>using redux in react</p>
        </div>
    )
}