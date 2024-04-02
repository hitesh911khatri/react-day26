### Intro to React
 
1. JSX (JavaScript XML) -> JS (Webpack + babel)
2. Inside return() is JSX
 
### Why className?
 
1. class is a reserved keyword in JS
2. for -> htmlFor in JSX
 
### {} -> template syntax
 
1. Supports expression
 
### Handy shortcuts
 
1. crtl + ` -> show / hide terminal
2. crtl + , -> settings | format on save
3. crtl + c -> stop react server in terminal
4. win + . -> emojis ?
 
npm start -> To start terminal
 
### Purpose index.js
 
1. Bootstrap (start) the react
 
### React.StrictMode - Error checking
 
1.  Displays Error in console
 
### function to be considered as components
 
1. function should start with a capital letter
2. It should at least one jsx element
 
### props -> arguments
 
1. props -> properties of the components
 
### <></> - React fragment / div
 
1.  Avoiding extra element in the DOM
2.  Styling is easier from parent
 
DRY - Donot Repeat Yourself
 
### Hooks
 
1. React listen to changes made by hooks
2. Hooks - function
3. It starts with `use`
4. `useState`
   1. `const [state, setState] = useState(InitialValue)`
   2. state -> state of mind | state of the art technology | current
   3. In App state -> _current data_
   4. `setState` updates the value of `state`
   5. `setState` react listens and updates `state` & view
   6. `import { useState } from "react";`
   7. Flow: User clicks -> `onClick` trigger -> `setLike` -> React updates view
 
### imports & exports
 
1. Types
   1. named - imports & exports - preferred
      1. Multiple exports
   2. default - imports & exports
      1. Only one default export per file
2. Always put export at end of the file - good practice
 
### Virtual DOM
 
1. Copy of the Real Dom
2. Large `{key: value}`
3. Updating it does not cost performance
4. To access VDOM you could use hooks (setState)
5. Once the update is done on the virtual DOM, then the Real dom is updated
6. Comparison - Reconciliation - VDOM & Real Dom
7. Key helps to quickly compare the changes
8. `document.*` in React - Looses performance