Commonly Used Lifecycle Methods:
    <> render: is only required method in a class component, when called, it should examine props and state and return one of these following types:
        <> React elements: typically created via JSX (e.g. <div />, <SomeComponent />) are react elements that instructs react to render a DOM node, or another user defined component
        <> Arrays and fragments: lets us return multiple elements from render
        <> Portals: lets us render children into a different DOM subtree
        <> String and numbers: these are rendered as text nodes in DOM
        <> Booleans or null: render nothing (e.g. mostly exists to support return 'test' && <Component /> pattern, where 'test' is boolean)
    render method should be pure, mean ig doesn noit modify component state, and returns same output for same input always, and it does not directly interact with browser, if we need to interact with browser, we should use componentDidMount or other methods instead, keeping render method pure makes it easy to reason about, also, render will not be invoked if shouldComponentUpdate method returns false

    <> Constructor: if we dont initialize state and don't bind methods, we dont need to implement a constructor in components, constructor is called before it is mounted, when implementing constructor for a react.component subclass, we should call super(props) before anyother statements, otherwise this.props will be undefined in constructor, which can leads to bugs, typically constructors are only used for these two purposes:
        <> initializing local state by assigning an object to this.state
        <> binding event handler methods to an instance
    we should not call setState in constructor, instead assign initial state to this.state directly in constructor an dis only place where we should directly assign value to this.state in other methods we shall always use this.setState instead, also not to introduce any kind of side effect related code within constructor, for those use cases we can use componentDidMount
