**PART 00**

- Fundamentals of Web apps
  - HTTP GET
  - Traditional web applications
  - Running application logic in the browser
  - Event handlers and Callback functions
  - Document Object Model or DOM
  - Manipulating the document object from console
  - CSS
  - Loading a page containing JavaScript - review
  - Forms and HTTP POST
  - AJAX
  - Single page app
  - JavaScript-libraries
  - Full-stack web development
  - JavaScript fatigue [link](https://auth0.com/blog/how-to-manage-javascript-fatigue/)

**PART 01**

- Introduction to React
  - create-react-app
  - Component
  - JSX
  - Multiple components
  - props: passing data to components
  - Possible error message
  - Some notes
  - Do not render objects
- JavaScript
  - Variables
  - Arrays
  - Objects
  - Functions
  - Exercises 1.3.-1.5.
  - Object methods and "this"
  - Classes
  - JavaScript materials
- Component state, event handlers
  - Component helper functions
  - Destructuring
  - Page re-rendering
  - Stateful component
  - Event handling
  - An event handler is a function
  - Passing state - to child components
  - Changes in state cause re-rendering
  - Refactoring the components
- A more complex state, debugging React apps
  - Complex state
  - Handling arrays
  - Update of the state is asynchronous
  - Conditional rendering
  - Old React
  - Debugging React applications
  - Rules of Hooks
  - Event Handling Revisited
  - A function that returns a function
  - Passing Event Handlers to Child Components
  - Do Not Define Components Within Components
  - Useful Reading
  - Web programmers oath
  - Utilization of Large language models

**PART 02**

- Rendering a collection, modules
  - [Visual Studio Code snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets)
  - JavaScript Arrays (find, filter, and map)
    [- Higher-order functions](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
    - Map
    - Reduce basics
  - [Event Handlers Revisited](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#event-handling-revisited)
  - Rendering Collections
  - Key-attribute
  - Map
  - Anti-pattern: [Array Indexes as Keys](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
  - Refactoring Modules
    [- importing modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  - When the Application Breaks
  - Web developer's oath
- Forms
  - Saving the notes in the component state
  - [Controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
  - Filtering Displayed Elements
    - [array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    - [Check Object Equality in JavaScript](https://www.joshbritz.co/posts/why-its-so-hard-to-check-object-equality/)
      - [Lodash library for comparisons](https://lodash.com/docs/4.17.15#isEqual))
- Getting data from server
  -
  - The browser as a runtime environment
    - [JSON server](https://github.com/typicode/json-server)
      - install the package: `npm install json-server --save-dev`
      - Make an addition to the scripts part of the package.json file:`"server": "json-server -p3001 --watch db.json"`
    - [ IO operations (input/output)](https://en.wikipedia.org/wiki/Input/output)
    - [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
  - npm
    - Runtime Dependency: A runtime dependency is a package that is required for your application to run correctly in a production environment -> 'npm install <package-name> '
    - Development Dependency:  is only needed during the development process, but not during the actual runtime of your application -> 'npm install <package-name> --save-dev'
    - [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
  - [Axios and promises](https://github.com/axios/axios)
    - [Axios' method get returns a promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - [Effect-hooks](https://react.dev/reference/react/hooks#effect-hooks)
    - By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
  - The development runtime environment
