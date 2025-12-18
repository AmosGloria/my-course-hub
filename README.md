## Summary of Concepts The Complete Introduction to React


## REACT:
 React is a JavaScript library for building user friendly applications. It is considered a library and not a framework because it is not a complete solution the use of other libraries is required in addition to react for a complete result to be achieved. 

React follows the Unix philosophy : doing one and getting it done very well which is building user interfaces.

A user interface means all details put in front of a user to enable the user interact with a machine.

## Key Concepts:
React as a Library:

React is a JavaScript library (not a framework), focused on building user interfaces (UIs). Unlike frameworks, React is modular, meaning you can use it with other libraries to build a solution. React enables developers to describe UIs declaratively, focusing on the outcome (state) rather than the process of changing the DOM.


## Declarative vs. Imperative:
React allows you to describe the desired UI and automatically handles the steps needed to achieve it (this is called declarative programming). Unlike traditional methods where developers manually manipulate the DOM (imperative programming), React takes care of UI updates based on data changes.


## Virtual DOM and Performance:
React introduced the concept of the Virtual DOM, which is an in-memory representation of the actual DOM. When data changes, React compares the new virtual DOM with the old one and efficiently updates only the necessary parts of the actual DOM. This tree reconciliation makes React highly performant.


## Components:
React’s core building blocks are components, which can be created using functions or classes. Components can manage their own state and accept props (attributes passed from parent components). Components can be reused across the application, promoting modularity.


## JSX:
React components often use JSX (JavaScript XML), a syntax that resembles HTML but is actually JavaScript code. JSX makes it easier to write and read React components by combining JavaScript with HTML-like syntax. It is then transpiled into JavaScript (using tools like Babel).


## State and Props:
State in React refers to data that can change over time, affecting the UI. Props are immutable values passed from parent to child components, providing dynamic data.


## React Hooks:
React introduced Hooks in version 16.8, allowing function components to manage state and side effects. Hooks like useState and useEffect simplify the management of state and lifecycle methods, making function components as powerful as class components.


## Event Handling:
React handles events like onClick or onChange using functions. Event handlers in React are written using camelCase, and they use function references, unlike traditional DOM event handling.


## Component Hierarchy:
React applications typically have a component hierarchy, where higher-level components manage shared state and behaviors, passing data and functions down to child components via props.


## Lifecycle Methods:
For class components, React provides lifecycle methods like componentDidMount and componentWillUnmount to perform actions before and after components are rendered. For function components, these behaviors are managed using the useEffect hook.


## Managing Side Effects:
Side effects like changing the title of the webpage or auto-focusing a form element are handled in React using useEffect, which runs after render and can be customized based on specific dependencies.


## Reusability and Composition:
Components can be composed to create complex UIs, promoting reusability. This is a significant advantage of React over traditional HTML, where dynamic behaviors were harder to manage.


## Updating UI Efficiently:
React’s reconciliation process ensures that only the necessary updates are made to the DOM, improving performance compared to direct DOM manipulation.


## Hooks for State and Effect Management:
useState and useEffect are the two most commonly used hooks. useState allows components to have state, while useEffect is used to manage side effects like fetching data or updating the DOM after rendering.


## Controlled Components:
React provides the ability to create controlled components, where form elements like inputs and text areas have their values managed by React state, allowing for easier form handling.


## Reusability of Components:
React’s modular approach allows components to be highly reusable across different parts of an application, increasing productivity and maintainability.

Summary of  React Hooks Cheat Sheet: The 7 Hooks You Need To Know
This cheat sheet is designed to help developers understand and effectively use React Hooks, which are essential for managing state, side effects, and performance optimizations in React function components. Here's a summary of the seven most important hooks covered:
## 1. useState Hook
Purpose: Allows you to create state variables in function components.


How it works: It returns an array with the current state value and a function to update that state.


## Usage: 
You can have multiple state variables and update them based on previous state using a function. You can also manage state using objects to keep track of multiple values.

## 2. useEffect Hook
Purpose: Handles side effects in function components (e.g., fetching data, DOM manipulation).


## How it works:
 It takes a callback function to perform the effect, and an optional dependency array. The effect runs after the component renders, and re-runs when the values in the dependency array change.


## Usage:
 You can use useEffect  to perform tasks like fetching data, subscribing to events, and cleaning up when the component unmounts.


## 3. useRef Hook
Purpose: Provides a way to reference DOM elements or React components directly.


## How it works:
 useRef returns an object with a current property that can be attached to an element's ref attribute.


## Usage: 
It's useful for tasks like focusing on an input field or interacting with the DOM directly.


## 4. useCallback Hook
Purpose: Memoizes functions to prevent unnecessary re-creations during re-renders.


## How it works:
 It takes a function and a dependency array, ensuring the function is only re-created when dependencies change.


## Usage: 
Helps improve performance by preventing re-creation of functions that don't change across renders, especially when passing callbacks to child components.

## 5.useMemo Hook
Purpose: Memoizes the result of expensive computations.


## How it works: 
Similar to useCallback, but instead of functions, it memoizes computed values. It recalculates the value only when its dependencies change.


## Usage:
 Useful for performance optimization, especially when dealing with computationally expensive calculations.


## 6. useContext Hook
Purpose: Allows you to access the value of a React Context without using the context.Consumer component.


## How it works:
 useContext  takes a context object and returns the current value of that context.


## Usage: 
It’s ideal for avoiding prop drilling, i.e., passing props through many levels of components. You can use useContext to access global state or settings in a React application.


## 7. useReducer Hook
Purpose: A more advanced hook for managing complex state logic, often used as an alternative to  useState.


## How it works: 
useReducer  works similarly to useState but uses a reducer function to manage state changes. It takes the current state and an action, then returns a new state.


## Usage:
 Useful for managing state transitions in complex components or when multiple pieces of state need to be updated together (common in larger applications).


## Benefits of React Hooks:
Hooks simplify the code by allowing stateful logic in function components.


They eliminate class-based components, making it easier to manage state and side effects.


## Performance optimizations:
 useMemo and useCallback help prevent unnecessary re-renders and computations.


Hooks provide a cleaner, declarative way to manage state and side effects, improving code readability and maintainability.



## Summary of JavaScript HTML DOM Object
The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object.
Below are some examples of how you can use the document object to access and manipulate HTML.


## Summary JavaScript HTML DOM Eements
Often, with JavaScript, you want to manipulate HTML elements.
To do so, you have to find the elements first. There are several ways to do this:
Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections
Finding HTML Elements by Id
The easiest way to find an HTML element in the DOM, is by using the element id.
This example finds the element with id=”meaning”
If the element is found, the method will return the element as an object (in element).
If the element is not found, element will contain null.


## Finding HTML Elements by Tag Name
This example finds all <span> elements.


Finding HTML Elements by Class Name
to find all HTML elements with the same class name, use 
getElementByClassName().





















