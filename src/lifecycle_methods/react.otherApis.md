<> setState:
    <> enqueues changes to component state and tells react that this compoennt and its children needs to be re rendered with updated state, primary method to update UI in response to event hanlers and server responses
    <> setState not always immediately update component, it may batch or defer update until later, to avoid such behavior we cn use componentDidUpdte or a callback function within updater,m either of which will gurantee to fire after update has been applied
    <> it will always re render unless shouldComponentUpdate returns false, if mutable objects are being used and conditional rendering logic can not be implemented in shouldComponentUpdate, then calling seState() only when new state differs from previous satate will avoid unnecessary re renders
    <> both state and props recieved by updater dunction are guranteed to be up to date, output of updater is shallowly merged with state, second parasmeter to seState is an optional callback function that will be executed once setState is completed and component is re-rendered, generally using componentDidUpdate for such logic is recommended
    <> we may optionally pass an object as first argumentto setState instead of function, this form of setState is also asynchronous and multiple calls during same cycle may be batched together, if next state depends on current state then  using updater function is right way to go about it.


<> forceUpdate: if render method depends on some other data than  default behavior of setState, that needs re rendering then we can call forceUpdate to do so, this will cause render to be called on component skipping shouldComponentUpdate, this will trigger normal lifecycle methods for child components, including shouldComponentUpdate and react will update DOM if there is any changes in markup, normally avoiding forceUpdate is a good idea, and only read from props and state in render


<> Class Properties: 
    <> defaultProps: can be defined as a property on component class itself, to set default props for class, used for undefined props but not for null props
    <> displayName: this string is used in debugging messages, usually we done need to set it explicitly because it inferred from name of function or class that defines component, use cases, such as debugging purposes, or in higher-order-component

<> Instance Properties:
    <> props: contains props that were defined by caller of this component, where props.children is a special prop, defined by child tag in JSX expression rather than tag itself
    <> state: state contains data specefic to component that may change over time, state is user defined and should be a plain javascript object, if soe value is not used in rendering should be used as state object, never mutate this.state drectly rather use setState