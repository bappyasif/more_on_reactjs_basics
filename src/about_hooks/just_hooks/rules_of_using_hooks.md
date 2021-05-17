Rules of using hooks:
    <> only calls hooks at top level
    <> only call hooks from react functions

    <> only call hooks at top level: don't call hooks from any loop conditions or nested functions, instead always use hooks at top level of any react function before any early returns, so that react can ensure that hooks are called in same order at each render of a component, that's what allows react to correctly preserve state of hooks between multiple hook calls

    <> only call hooks from react functions: don't call hooks from regular JavaScript functions, instead we can, call hooks from  react functional components, and customHooks, and this rule ensure all stateful logic in a component is clearly visible from its source code

<> how does react preserve state of hooks between mutiple useState and useEffect calls: react relies on order in which hooks are called, as they would stay same for each rendering, as long as order of hook calls is same between renders, react can associate some local state with of them, but if we place a hook withins a condition it would skip due to rendering and then state would be pointing to a different render result from earlier, which doesn't exist and thus leads to bugs, this is why Hooks must be called always on top level of our react functional components, if we need to use conditional check we can do so inside out effects functions.