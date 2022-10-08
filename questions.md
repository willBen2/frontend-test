- **What is the difference between Component and PureComponent? give an example where it might break my app**
    - PureComponent is very similar to Component, the main difference is that PureComponent do a shallow comparison in props in order to know if should re-render or not. In component we can implement `shouldComponentUpdate` in order to control the re-render of component.
      <br/>Since PureComponent just do a shallow comparison, it may be easier to break it, by passing an object literal or an array literal directly in the props. It will do a check that will always fail.
      <br/>
      <br/>
- **Context + ShouldComponentUpdate might be dangerous. Can think of why is that?**
    - Context is not passed node by node down the three, it goes directly to the consumer. Since we usually use Context when we have a deep component that needs some info, we have lots of middle components between the Provider and the Consumer. If one of this middle components (that is a parent of a Consumer) implements `shouldComponentUpdate` without checking for context changes, the child Consumer will never get the Context update.
      <br/>
      <br/>
- **Describe 3 ways to pass information from a component to its PARENT.**
    - Callbacks, references, context
      <br/>
      <br/>
- **Describe 3 ways to pass information from a component to its PARENT.**
    - Callbacks: if child has some prop to receive a callback from parent, it can send data by calling this callback:, references, context
      ```javascript
        <Child onSelect={onSelect} /> // Parent will receive data in onSelect function (callback)
      ```
    - References: if child is a class component, or if is a functional component that uses `forwardRef` and `useImperativeHandle` we can also pass data to parent;
      ```javascript
        const ref = useRef();
        <Child ref={ref} /> // Parent will receive data when accessing ref.current
      ```
    - Context: if child and parent are Consumers of a provider, child can use some context method to update some context data and parent will get this data too;
      <br/>
      <br/>
- **Give 2 ways to prevent components from re-rendering.**
    - Shallow comparison: With class components we can use PureComponent and with functional components we can use React.memo;
    - In class components we can use the method `shouldComponentUpdate` to tell React if the component should update or not;
    - React has its own ways to prevent components to re-render. Aside from specific methods, we can work with Component Composition that is a way to prevent re-renders to happen in some cases.
      <br/>
      <br/>
- **What is a fragment and why do we need it? Give an example where it might break my app.**
    - Fragment is just a piece of code to hold components in the same level without the need to add a new node. It's not rendered in the screen, and doesn't occupy any node in DOM.
      <br/> Let's say that we have a component that returns some `<View />` but also return a `<Modal />`. They need to be in the same level, but we can return then this way:
      <br/>
  ````javascript
     return (
        <View />
        <Modal />
     )
  ````
  with `<Fragment />` we can do this way:
    ````javascript
     return (
      <Fragment> {/* or <></> */}
        <View />
        <Modal />
      </Fragment>
     )
  ````
  The problem with using Fragments is that besides not adding a node to the dom, it adds a container to Virtual DOM. So if the parent is applying some style to direct child, the className will be applied to the Fragment instead the Component. For example a container `<ul/>` that apply styles to a bunch of `<li/>` inside a Fragment.
- <br/>
  <br/>
- **Give 3 examples of the HOC pattern.**
    - I dont know if I need to write some HOCs or just say some existing HOCs, but I will explain it and say examples.
      <br />A HOC (High Order Component) comes from the Javascript pattern HOF (High Order Functions) that are enhancers to other functions.
      <br/>HOCs are a way to put extra functionality to an existing component. They were used like an old to share state logic between components before we have hooks.
      <br/>For example the HOC `connect` from `react-redux`. It was responsibly for inject some props (actions, dispatch, etc) in all the components that used it.
      <br/>`memo` from `React` is also another example of HOC.
      <br/>`withRouter` from `react-router` is also another example of HOC.
      <br/>All of the three examples do the same thing: process some shared logic and apply new functionality or attributes to the component using it.
      <br/>
      <br/>
- **what's the difference in handling exceptions in promises, callbacks and async...await.**
    - Promises: you have to implement the `catch` method.
    - Callbacks: you should have an `error` property as one of the arguments to handle it. It's a used standart to put this one as the first parameter so we can force the handling.
    - Async/Await: you need to put the code inside a `try/catch`.
      <br/>
      <br/>
- **How many arguments does setState take and why is it async.**
    - `setState` from class components takes two arguments: the state object and a callback `(state) => {}` (that is called when the update is complete);
    - `setState` from functional components takes one argument, that is either the new state or a function to update the state `(oldState) => {}`.
      If we take the definition of async by looking just to React side, yes, setState is async, because when you call the function, the re-render (update of state) doesn't happen right after it. If we take the javascript event loop point of view, is not async.
    - <br/>
      <br/>
- **List the steps needed to migrate a Class to Function Component.**
    - change the definition of class to function, and putting props as function argument;
    - look for all the `this.` that we are using and replace for specific cases. For example by using `useRef` for like timeout definitions, element references;
    - migrate the usage of `this.state.something` to `state` from hooks;
    - migrate the usage of `this.setState` to `setState` from hooks (if using complex state, we can decide to keep it as an object or to split in multiple useStates, depending on the case, I prefer to keep an object);
    - migrate the methods from cycle to existing hooks:
        - `componentDidMount` becomes `useEffect(() => {}, [])` (to be honest I don't like to think this way, cause the way to program in class components is different from functional components)
        - `componentDidUpdate` can be splitted in multiple `useEffect(() => {}, [dependency])` (its better to split in multiple to be easier to refactor, maintain, test).
        - `componentWillUnmount` becames the return function of the specific `useEffect` using it `useEffect(() => { return () => {}}, [dependency])`.
        - `render` is just what we return in the function.
          <br/>
          <br/>
- **List a few ways styles can be used with components.**
    - You can use directly css `classNames`
    - We may use less modules or css modules or sass modules, in order to prevent class colisions
    - Object literal in the `style` property
    - Using external libraries like `styled-components` to create styles (under the hood they use template literals)
      <br/>
      <br/>
- **How to render an HTML string coming from the server.**
    - Use `dangerouslySetInnerHtml={{ __html: stringFromServer }}`. But is not recommended because we can expose our app to XSS attacks.
