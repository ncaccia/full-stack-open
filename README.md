# The full stack developer's oath

1. I will have my browser developer console open all the time
2. I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
3. I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved there as I expect
4. I will keep an eye on the database: does the backend save data there in the right format
5. I progress with small steps
6. I will write lots of console.log statements to make sure I understand how the code behaves and to help pinpoint problems
7. If my code does not work, I will not write more code. Instead, I start deleting the code until it works or just return to a state when everything was still working

## Notes from the Helsinski Full Stack Open course

## PART 00 Fundamentals of Web apps

- #### Fundamentals of Web apps
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

## PART 01 Introduction to React

- #### Introduction to React
  - create-react-app
  - Component
  - JSX
  - Multiple components
  - props: passing data to components
  - Possible error message
  - Some notes
  - Do not render objects
  - Vite --> `create vite@latest -- --template react.`
- #### JavaScript
  - Variables
  - Arrays
  - Objects
  - Functions
  - Exercises 1.3.-1.5.
  - Object methods and "this"
  - Classes
  - JavaScript materials
- #### Component state, event handlers
  - Component helper functions
  - Destructuring
  - Page re-rendering
  - Stateful component
  - Event handling
  - An event handler is a function
  - Passing state - to child components
  - Changes in state cause re-rendering
  - Refactoring the components
- #### A more complex state, debugging React apps
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

## PART 02 Communicating with server

- #### Rendering a collection, modules
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
- #### Forms
  - Saving the notes in the component state
  - [Controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
  - Filtering Displayed Elements
    - [array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    - [Check Object Equality in JavaScript](https://www.joshbritz.co/posts/why-its-so-hard-to-check-object-equality/)
      - [Lodash library for comparisons](https://lodash.com/docs/4.17.15#isEqual))
- #### Getting data from server
  - The browser as a runtime environment
    - [JSON server](https://github.com/typicode/json-server)
      - install the package: `npm install json-server --save-dev`
      - Make an addition to the scripts part of the package.json file:`"server": "json-server -p3001 --watch db.json"`
    - [ IO operations (input/output)](https://en.wikipedia.org/wiki/Input/output)
    - [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
  - npm
    - Runtime Dependency: A runtime dependency is a package that is required for your application to run correctly in a production environment -> 'npm install <package-name> '
    - Development Dependency: is only needed during the development process, but not during the actual runtime of your application -> 'npm install <package-name> --save-dev'
    - [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
  - [Axios and promises](https://github.com/axios/axios)
    - [Axios' method get returns a promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - [Effect-hooks](https://react.dev/reference/react/hooks#effect-hooks)
    - [Video deeply explained](https://www.youtube.com/watch?v=3Wb9l18KoxI)
    - By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
    - [Important: React Lifecycle of a Functional Component](https://www.youtube.com/watch?v=Zz9pLellSQA)
  - The development runtime environment
- #### Altering data in server
  - [REST](https://en.wikipedia.org/wiki/REST)
    - [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
  - Sending Data to the Server
    - REST terminology, individual data objects === resources
  - Changing the Importance of Notes
  - Extracting Communication with the Backend ito a Separate Module
    - [Single-responsibility principle:](https://en.wikipedia.org/wiki/Single-responsibility_principle) "A module should be responsible to one, and only one, actor."
    - src/services directory
  - Cleaner Syntax for Defining Object Literals
    - [Promises chaining](https://javascript.info/promise-chaining)
  - Promises and Errors
- #### Adding styles to React app
  - Improved error message
    - [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
    - [CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
      - Old school CSS = single file without using a CSS preprocessor
      - Tailwind CSS use [PostCSS](https://postcss.org/) as preprocessor
  - [Inline styles](https://react-cn.github.io/react/tips/inline-styles.html)
    - limitations: [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) can't be used straightforwardly.
  - Couple of important remarks
    - we can not call method map of the value null = warning with initial null / server errors cases.
    - the initialization of the state "masked" the problem that is caused by the fact that the data is not yet fetched from the backend.
    - conditional rendering => return null if the component state is not properly initialized:
      - cases where it is impossible to define the state so that the initial rendering is possible.
    - [ Vite Enviromental variables](https://vitejs.dev/guide/env-and-mode.html) to save keys
      - [Vite .env video tutorial](https://www.youtube.com/watch?v=jqCjflIGH1o)
    - Important extra learnings from working with APIs
      - You can get blocked by accidently looping in excess!!
        - To prevent it, use a **debounce** technique: limit the rate at which a function is executed. Triggering Events --> Delay --> Resetting the Delay --> Executing the Function
        - [Debounce and throttle](https://www.youtube.com/watch?v=cjIswDCKgu0)

## Part 03 Programming a server with NodeJS and Express

- #### Node.js and Express

  - Node
    - versioning model used in npm = [semantic versioning.](https://docs.npmjs.com/about-semantic-versioning)
      - If the major number of a dependency does not change, then the newer versions should be backwards compatible. This means that if our application happened to use version 4.99.175 of Express in the future, then all the code implemented in this part would still have to work without making changes to the code. In contrast, the future 5.0.0 version of Express may contain changes that would cause our application to no longer work.
    - updating Node using [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) - Check the available Node.js versions `nvm ls-remote` -> `nvm install <version>`
    - you can switch to the newly installed version with: `nvm use <version>` --> `nvm alias default <version>` To set a default Node.js version to be used across terminal sessions.
    - **Package.json file** defines commonly used npm scripts:
      - start": "node index.js" --> we can ran `npm start` now to start the server
      - "test": "echo \"Error: no test specified\" && exit 1" --> we need to add testing library.
    - `const http = require('http')` --> application imports Node's built-in web server module.
    - `createServer()` method of the http module to create a new web server
  - Express
    - [transitive dependencies](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/)
      - import express (is a function)
      - define routes to the application
        - define event handler HTTP requests
        - Express automatically sets the Content-Type header
        - In an Express.js application, the `app._router.stack` property is a part of the internal implementation of the Express router. It is essentially an array that contains all the middleware and route handlers that have been registered on the application instance.
          - When you define routes using methods like app.get(), app.post(), etc., Express registers these routes as layers in the \_router.stack
          - Nested Routers: If you use express.Router(), the nested routers are also included in the \_router.stack as middleware.
        - `console.log(app._router.stack);`
      - [nodemon](https://github.com/remy/nodemon) to easy restart the server `npm install --save-dev nodemon` --> install it as a Dev dependency
  - REST -> Representational State Transfer
    - how RESTful APIs are typically understood in web applications. REST refers to as a uniform interface, which means a consistent way of defining interfaces that makes it possible for systems to cooperate.
      - Singular things (like notes) are called **resources** in RESTful thinking. Every resource has an associated URL which is the **resource's unique address**.
        - One convention for creating unique addresses is to combine the name of the resource type with the resource's unique identifier.
        - We can execute different operations on resources. The operation to be executed is defined by the HTTP verb.
          URL | verb | functionality
          notes/10 | GET | fetches a single resource
          notes | GET | fetches all resources in the collection
          notes | POST | creates a new resource based on the request data
          notes/10 | DELETE | removes the identified resource
          notes/10 | PUT | modifies a record's information and creates a new record if one is not available.
          notes/10 | PATCH | updates a resource without sending the entire body in the request.
        - [Route params](http://expressjs.com/en/guide/routing.html#route-parameters) --> using the colon syntax`:`
        - for bar request, we can add special methods to the response:
          - [.status(400)](https://expressjs.com/en/4x/api.html#res.status) => Sets the HTTP status for the response
          - [.end()](https://expressjs.com/en/4x/api.html#res.end) => Ends the response process.
    - [The Visual Studio Code REST client](https://github.com/Huachao/vscode-restclient/blob/master/README.md#usage)
      - 1. make a directory at the root of the application named requests.
      - 2. create a new get_all_notes.rest file and define the request that fetches all notes.
        - Add multiple requests in the same file using ### separators between requests.
  - Receiving data
    - HTTP POST request to the address with the request body in JSON format.
      - To access the data easily, we need the help of the Express [json-parser](https://expressjs.com/en/api.html) that we can use with the command `app.use(express.json())`. Without the json-parser, the body property would be undefined. The json-parser takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request object before the route handler is called.
      - JavaScript objects cannot be directly passed through HTTP requests without being converted into a format that can be transmitted over the network, such as a JSON string
        - HTTP is a text-based protocol, meaning it can only transmit text data.
        -
  - About HTTP request types
    - **Safety**: GET and HEAD methods SHOULD NOT have the significance of taking an action other than retrieval. The executing request must not cause any side effects on the server. By side effects, we mean that the state of the database must not change as a result of the request, and the response must only return data that already exists on the server.
    - **Idempotency**: All HTTP requests except POST should be idempotent:
    - _POST is the only HTTP request type that is neither safe nor idempotent._ If we send 5 different HTTP POST requests to /api/notes with a body of {content: "many same", important: true}, the resulting 5 notes on the server will all have the same content.
  - Middleware
    - Functions that can be used for handling request and response objects.
    - In practice, you can use several middlewares at the same time. When you have more than one, they're executed one by one in the order that they were listed in the application code.
    - Middleware is used like this: `app.use(requestLogger)`
      - Middleware functions have to be used before routes when we want them to be executed by the route event handlers. Sometimes, we want to use middleware functions after routes. We do this when the middleware functions are only called if no route handler processes the HTTP request.
    - [Morgan](https://github.com/expressjs/morgan) npm package: HTTP request logger middleware for node.js

- #### Deploying app to internet

  - A. [Same origin policy and CORS](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

    - Universal principles regarding the safe operation of web applications (not specific to React or Node)
    - Origin policy un a nutshell:
      - The same-origin policy is a security mechanism implemented by browsers in order to prevent session hijacking among other security vulnerabilities
      - URL's origin is defined by the combination of **protocol** (AKA scheme), **hostname**, and **port**.
      ```
      http://example.com:80/index.html
      protocol: http
      host: example.com
      port: 80
      ```
      - If the resource is fetched using a URL that doesn't share the same origin(scheme, host, port) as the source HTML, the browser will have to check the `Access-Control-Allow-origin` response header. If it contains \* on the URL of the source HTML, the browser will process the response, otherwise the browser will refuse to process it and throws an error.
    - Solution: [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
      - install cors package --> `npm install cors`
      - require it on the backend index.js `const cors = require('cors');`
        - add a middleware to enable it: `app.use(cors());`

  - B. Deploying Application to the Internet
    - Side lessons:
      - Problems with repos inside repos -> [git submodule](https://cristianowerneraraujo.medium.com/why-when-and-how-to-use-git-submodules-1a72615de453) = Git repository nested inside another. Useful when you want to include the contents of one Git repository within another Git repository.
        - **STEPS**
          1. Navigate to the Main Project's Directory
          2. Add the Submodule: `git submodule add <repository_URL> <submodule path>`
          3. Commit the Changes and then push them
    - For small projects, we can use PaaS (Servers as Plataforms) free tier options
      - [Fly.io](https://fly.io/) or [Render](https://render.com)
      - Adjust Port used to [enviroment variables](https://en.wikipedia.org/wiki/Environment_variable):
        ```
        const PORT = process.env.PORT || 3001
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        })
        ```
  - C. Frontend production build
    - In development mode the application is configured to give clear error messages, immediately render code changes to the browser, and so on.
    - deployed = create a [Vite production build](https://vitejs.dev/guide/build.html) or a version of the application that is optimized for production. ` npm run build.`
      - This creates a directory called dist which contains the only HTML file of our application (index.html) and the directory assets. [Minified](<https://en.wikipedia.org/wiki/Minification_(programming)>) version of our application's JavaScript code will be generated in the dist directory
  - Serving static files from the backend
    - Running like a **single-page app** option:
      - both the **frontend** and the **backend** are at the same address, we can declare baseUrl as a [relative URL](https://www.w3.org/TR/WD-html40-970917/htmlweb.html#h-5.1.2). This means we can leave out the part declaring the server. Example: `const baseUrl = '/api/notes'`
      - Create a **production build** of the App and copy the production **dist directory** to the root of the backend repository and configure the backend to show the frontend's main page (the file dist/index.html) as its main page. `cp -r dist ../backend`
      - Make **Express** show static content, the page index.html and the JavaScript, etc., it fetches, we need a **built-in middleware** from Express called [static](https://expressjs.com/en/starter/static-files.html). `app.use(express.static('dist'))`
      - The application can now be used from the backend address http://localhost:3001
        - When we use a browser to go to the address http://localhost:3001, the server returns the index.html file from the dist directory. The file contains instructions to fetch a CSS stylesheet defining the styles of the application, and one script tag that instructs the browser to fetch the JavaScript code of the application - the actual React application.
          **- Important** Unlike when running the app in a development environment, everything is now in the same node/express-backend that runs in localhost:3001. When the browser goes to the page, the file index.html is rendered. That causes the browser to fetch the production version of the React app. Once it starts to run, it fetches the json-data from the address localhost:3001/api/notes.
  - The whole app to the internet
    - The node/express-backend now resides in the Fly.io/Render server. When the root address is accessed, the browser loads and executes the React app that fetches the json-data from the Fly.io/Render server.
      ![alt text](assets/image.png)
  - Streamlining deploying of the frontend
    - Script to create a new production build of the frontend (custom script on the **backend package.json**)
      - render.com
        ```
        {
          "scripts": {
            //...
            "build:ui": "rm -rf dist && cd ../frontend && npm run build && cp -r dist ../backend",
            "deploy:full": "npm run build:ui && git add . && git commit -m uibuild && git push"
          }
        }
        ```
        - `npm run build:ui` = builds the frontend and copies the production version under the backend repository.
        - `npm run deploy:full` = contains also the necessary git commands to update the backend repository.
  - D. Vite [Proxy](https://vitejs.dev/config/server-options.html#server-proxy)
    If the React code does an HTTP request that are made to paths starting with what we define(in our case '/api') to a server address at http://localhost:5173 not managed by the React application itself (i.e. when requests are not about fetching the CSS or JavaScript of the application), the request will be redirected to the server at http://localhost:3001.

    - Due to changing the backend address to a relative URL, the connection to the backend does not work.

      - In development mode the frontend is at the address localhost:5173, the requests to the backend go to the wrong address localhost:5173/api/notes. The backend is at localhost:3001.

        - Vite let's us fix this through vite.config.js file of the frontend repository.
        - Previous code:

        ```
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [react()],
        })
        ```

        - New code

        ```
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [react()],
          // Added for reparing the relative url issue after deploying
          server: {
            proxy: {
              '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
              },
            }
          },
        })
        ```

    - **Negative aspect**: complicated it is to deploy the frontend. Deploying a new version requires generating a new production build of the frontend and copying it to the backend repository. This makes creating an automated [deployment pipeline](https://martinfowler.com/bliki/DeploymentPipeline.html) more difficult.

- #### Saving data to MongoDB

  - [Debugging Node applications](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#debugging-node-applications)
    - Read more:
      - [JS debugging beyond console.log](https://swizec.com/blog/javascript-debugging-slightly-beyond-consolelog/)
      - [I am a puts debuggerer](https://tenderlovemaking.com/2016/02/05/i-am-a-puts-debuggerer.html)
    - BASIC: Visual studio steps to debug [(video tutorial)](https://youtu.be/4Z8CM-E-HRE?si=kKCNfzJr4dvUQTGx&t=830)
      - Steps:
        - debug-tab/Create a launch.json/select Node.js/
      - Option A = adding --inspect to node server
        - open a termina inside VSC and initiate terminal on the bar: `> create new terminal`
        - start the server with `node --inspect index.js`
        - open de debuger on the bar: `> debug:attach node process`
        - pick the process running on the server (web socket url)
        - add breakpoints using F9 to pause each line of code (replace manuals console.log())
      - Option B = adding `--inspect-brk` this starts whern I open the debug tab, and goes one line by line, no breakpoints
      - Option C = add debugging to chrome
        - adding `--inspect` to node server
        - open browser chrome//inspect
        - click on the inspect tag we can also pass the `--inspect` flag to `nodemon --inspect index.js`
      - **Important**
        - [Jidoka principle](https://leanscape.io/principles-of-lean-13-jidoka/) (stop and fix)
          - When bugs occur, the worst of all possible strategies is to continue writing code. It will guarantee that your code will soon have even more bugs.
  - MongoDB [(document database)](https://en.wikipedia.org/wiki/Document-oriented_database)
    - [NoSQL](https://en.wikipedia.org/wiki/NoSQL) umbrella
      - Organized in [Collections](https://www.mongodb.com/docs/manual/core/databases-and-collections/) (Similar to tab les in SQL db)
      - Each resource is a [Documents](https://www.mongodb.com/docs/manual/core/document/)
        - Size Limit: The maximum BSON document size is 16 megabytes.
        - Document Field Order: Unlike JavaScript objects, the fields in a BSON document are ordered.
    - Mongo database services -> [MongoDB Atlas.](https://www.mongodb.com/products/platform/atlas-database)
      - Cluster0 is free forever to practice
      - whitelist my IP to enter the DB to gain access
      - Connect the data
        - Select the driver method (node.js)
        - install [Mongoose](http://mongoosejs.com/index.html) in our notes project backend: it is a library that offers a higher-level API. = **Object document mapper (ODM)**
        - <!-- - First install the MongoDB `npm install mongodb` -->
        - get the MongoDB URI = address to the database. The address looks like this:
        ```
        mongodb+srv://fullstack:thepasswordishere@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority
        ```
  - [Schema with mongoose](https://mongoosejs.com/docs/guide.html)
    - After connecting the backend to the db:
      - Define schema for the document and a [matching model](https://mongoosejs.com/docs/models.html)
        - Schema -> tells mongoose how the objects are to be stored in the database.
        - Model -> the first "resource" parameter is the singular name of the model.
          - The name of the collection will be the lowercase plural, Mongoose convention is to automatically name collections as the plural (e.g. notes) when the schema refers to them in the singular (e.g. Note). For example: Person -> people, Car -> cars, Mouse -> mice
        - The idea behind Mongoose is that the data stored in the database is given a schema at the level of the application that defines the shape of the documents stored in any given collection.
          - Document databases like Mongo are **schemaless**, meaning that the database itself does not care about the structure of the data that is stored in the database.
  - Creating and saving objects - We use the constructor function `const note = new Note({...})` - Saving -> When the object is saved to the database, the event handler provided to `then` gets called.
    `   note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})` - If the connection is not closed, the program will never finish its execution. - Strict mode: By default, Mongoose operates in strict mode for queries, meaning it will ignore any fields in the query object that are not defined in the schema. This catch errors where you might have misspelled a field name or are querying with a field that doesn't exist in your schema. - To dissable it -> `mongoose.set('strictQuery', false)`
  - Fetching objects from the database
    - [Mongo search query syntax.](https://docs.mongodb.com/manual/reference/operator/)
    - The objects are retrieved from the database with the [find method ](https://mongoosejs.com/docs/api/model.html#model_Model-find)of the Note model.
    - The parameter of the method is an object expressing search conditions -> {} = empty object = get all notes stored.
  - Learnings from Exercise 3.12.

    - We can get the command-line parameters from the process.argv variable.
    - Using **.then()** versus **async/await** for asynchronous functions

      - matter of personal preference and style

      ```
      mongoose.connect(url)
      .then(() => {
          console.log('Connected to MongoDB');
      })
      .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
      });

      ```

      ```
      async function connectToMongoDB() {
          try {
              await mongoose.connect(url);
              console.log('Connected to MongoDB');
          } catch (error) {
              console.error('Error connecting to MongoDB:', error);
          }
      }
      connectToMongoDB();
      ```

  - **Connecting the backend to a database**

    - The frontend assumes that every object has a unique id in the id field
    - Output 'id' instead of MongoDB '\_id': even though the \_id property of Mongoose objects looks like a string, it is in fact an object. The **toJSON** method we defined transforms it into a string just to be safe

      - One way to format the objects returned by Mongoose is to modify the **toJSON method** of the schema, which is used on all instances of the models produced with that schema.
      - Using the [transform function](https://mongoosejs.com/docs/api/document.html#transform)

        - **doc or document** The mongoose document which is being converted
        - **ret or returnedObject** The plain object representation which has been converted
        - options The options in use (either schema options or the options passed inline)
          ```
          noteSchema.set('toJSON', {
              transform: (document, returnedObject) => {
                returnedObject.id = returnedObject._id.toString()
                delete returnedObject._id
                delete returnedObject.__v
              }
            })
          ```
        - Another way would be Using 'virtuals': essentially fake fields that Mongoose creates. They're not stored in the DB, they just get populated at run time:

          ```
            // Duplicate the ID field.
            Schema.virtual('id').get(function(){
                return this._id.toHexString();
            });

            // Ensure virtual fields are serialised.
            Schema.set('toJSON', {
                virtuals: true
            });
          ```

  - Moving db configuration to its own module

    - Mongoose-specific code into its own module:
      - new `models` directory -> add each model-schema
      - Defining **Node** module -> public interface of the module is defined by setting a value to the module.exports variable
        - things defined inside of the module, like the variables mongoose and url will not be accessible or visible to users of the module.
      - Require it on the index -> `const ModelName = require('./models/modelName');`
        - assigned to the same object that the module defines.
        - DON'T hardcode url address into the code. Passed it as an **environment variable**. There are many ways to define the value of an environment variable:
          - Define it when the application is started: `MONGODB_URI=address_here npm run dev`
          - Using the [dotenv](https://github.com/motdotla/dotenv#readme) library.
            - loading environment variables from a .env file into process.env in Node.js applications. We create a **.env** file at the root of the project. The environment variables are defined inside of the file.
            - Add `require('dotenv').config()` into the index.js
        - Note: dotenv vs Vite's VITE\_ functionality
          - Use **dotenv**
            - By: requiring it on the index.js `require('dotenv').config()` AND passing them with `process.env`.
            - You are working on a Node.js project that does not use Vite.
            - You need a simple and portable way to manage environment variables across different types of projects.
            - You want to use environment variables in both server-side and client-side code.
          - Use **Vite's VITE\_** functionality
            - By: adding `VITE_` to each .env variable AND importing then with `import.meta.env`
            - You are working on a Vite-based project.
            - You want the benefits of Vite's optimizations and automatic loading of environment variables.
            - You prefer to keep your configuration within the conventions provided by Vite for consistency and ease of use.
    - Important note on deployment: remember to waitlist your IPs === Security!

  - Using database in route handlers

    - **POST / Create resource**:
      - The `resourceName` object is created with the `ResourceName` constructor function. The response is sent inside of the callback function for the save operation. This ensures that the response is sent only if the operation succeeded (Consider error handling).
      - The `savedResourceName` parameter in the callback function is the saved and newly created `resourceName`. The data sent back in the response is the formatted version created automatically with the toJSON method: `res.json(savedResourceName)`
    - **DELETE or PUT / find resource by Id**:
      - Fetch individual resource by using the method `findById`

  - Verifying frontend and backend integration

    - backend gets expanded, good practice to **test all the request** (Postman or the VS Code REST client)
    - Only after every route has been verified to work in the backend, start testing that the frontend works with the backend.

  - Learnings from Exercises 3.13.-3.14.

    - Mongoose `.exe()` to [handle promises](https://mongoosejs.com/docs/promises.html) -> Mongoose queries are NOT promisses.
    - findOne() + regular expressions (RegExp) are powerfull to find duplicates:
      ```
      app.post('/api/people', (req, res) => {
      const regex = new RegExp(req.body.name, 'i');
      Person.findOne({ name: { $regex: regex } }).exec()
          .then(result => {
              if (!result) {
                  const person = new Person({
                      name: req.body.name,
                      phone: req.body.phone,
                  })
                  person.save().then((savedPerson) => {
                      res.json(savedPerson);
                  })
              } else {
                  return res.status(409).json({
                      error: 'Conflict: The name already exists in the phonebook'
                  })
              }
          });
      })
      ```

  - Error handling

    - Avoid db chrashes that stop the server -> **always give a respond to a request**
    - catch method
      - capture `null` values === 404 status ()
      - caputre promise rejections === 500 status (internal server error)
      - capture diferent type of data on the request error (CastError: Cast to ObjectId failed for value "anyValue" (type string) at path "\_id" for model "AnyModel")
    - Add as much feedback to user as posible on the error response:
      ```
      .catch(err => {
            console.log(err);
            res.status(400).send({ error: 'malformetted id' });
        })
      ```
    - When dealing with Promises, it's almost always a good idea to add error and exception handling. Otherwise, you will find yourself dealing with strange bugs.

  - Moving error handling into middleware

    - Using [Express Error Handlers](https://expressjs.com/en/guide/error-handling.html). middleware that are defined with a function that accepts four parameters.

      - `errorHandler = (error, request, response, next)`

        ```
        const errorHandler = (err, req, res, next) => {
          console.error(err.message)

          if (err.name === 'Any type of error') {
            return res.status(error code).send({ error: 'feedback we want to give' })
            }

            next(err)
        }
        ```

      - **Important!** The middleware has to be the last loaded one, also all the routes should be registered before this!

    - Cases where it is better to implement all error handling in a single place. Useful if we want to report data related to errors to an external error-tracking system
      - [Sentry](https://sentry.io/welcome/) Tool free-tier: Error Monitoring and Tracing / Alerts and notifications via email
    - Steps:
      - The next function is passed to the handler as param.
      - The error is passed forward through the next function as a param.
        - If next was called without an argument, then the execution would simply move onto the next route or middleware.
    - Execution will continue to the error handler middleware.
      - We can define conditions for specific errors res.

  - The order of middleware loading = be careful when defining middleware app.use() order!!
  - Other operations (on mongoose)

    - **UPDATE** -> [.findByIdAndUpdate(id, updatedResource, options)](https://mongoosejs.com/docs/api/model.html#model_Model-findByIdAndUpdate)
      - It receives a regular JavaScript object as its argument, and not a new note object created with the Note constructor function.
      - By default, the updatedNote parameter of the event handler receives the original document without the modifications. We added the **optional { new: true } parameter**, which will cause our event handler to be called with the new modified document instead of the original.
      - **IMPORTANT!!** carefull with how I pass the IDS:
        - `req.params.id` -> as it comes from the browser
        - `req.body.id` -> as it comes from the request body
    - **DELETE** -> [.findByIdAndDelete()](<https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()>)

  - Learnings from Exercises 3.15.-3.18.
    - **Errors to consider**
      - Error: The JSON payload has a syntax error due to a trailing comma.
        JSON requires that all property names be double-quoted and that there are no trailing commas after the last property in an object.

- #### Validation and ESLint

  - Deploying the database backend to production

    - **Validations to protect DB**
      - Constraints applied to the data that is stored in our app db (ex: empty content properties) -[ Mongoose validation](https://mongoosejs.com/docs/validation.html) func: check format of the data before it is stored in the database.
        - defined in the SchemaType
          - [built-in](https://mongoosejs.com/docs/validation.html#built-in-validators) provided by Mongoose
          - [Custom validator](https://mongoosejs.com/docs/validation.html#custom-validators)
            - Declared by passing a validation function
            ```
            validate: {
              velidator: (v) => { // receives the value (v) of the field being validated.
                return someRegularExpression.test(v); // example: return /\d{2,3}-\d{6,}/.test(v);
              }
              message: (props) => { // props is an argument provided by Mongoose (using arrow functions).
                return `${props.value} personalized message;
              }
            }
            ```
      - If we try to store an object in the database that breaks one of the constraints, the operation will throw an exception
      - **Important!** Validations are not run by default when findOneAndUpdate and related methods are executed.
        - We need to add `runValidators: true` to the option object
        ```
        Note.findByIdAndUpdate(
          request.params.id,
          { content, important },
          { new: true, runValidators: true, context: 'query' } // This option run the validator
        )
        ```
    - The environment variables defined in dotenv will only be used when the backend is not in production mode, i.e. Fly.io or Render.
      - For production, we have to set the database URL in the service that is hosting our app.

  - Learnings from Exercises 3.19.-3.21.

    - `findByIdAndUpdate()` method in Mongoose doesn't throw an error if the ID doesn't exist. Instead, it simply returns `null`. You need to handle this case explicitly in your .then block to return an appropriate response
      ```
      if (!result) {
            return res.status(404).json({ error: 'Error feedback...' });
        }
      ```

  - [Lint](<https://en.wikipedia.org/wiki/Lint_(software)>)

    - Wikipedia Definition: Lint or a linter is any tool that detects and flags errors in programming languages, including stylistic errors. The term lint-like behavior is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code.

    - JS leading tool for static analysis (aka "linting") is [ESlint](https://eslint.org/)
      - **IMPORTANT** = [ESLint IS NOT a formater](https://www.youtube.com/watch?v=Cd-gBxzcsdA) (Aka: Prettier), it is a linter
        ![alt text](assets/FormaterVSLinter.png)
    - Installl it as a development dependency: `npm i -D eslint`.
      Note: the -D flag stands for --save-dev

      - The v.8.x (legacy) from the course has broadly change in the v9.x (actually manteined)
        - [eslint.config.mjs](https://eslint.org/docs/latest/use/configure/configuration-files) (Flat Config Files = actual used) vs .eslintrc.js
          - `.eslintignore` deprecated, [we use the ignores code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) `{ ignores: ["**/dist"] }` inside the falt config file.

    - Installing the [ESLint Stylistic plugin](https://eslint.style/guide/getting-started) = a collection of stylistic rules for ESLint.

      - JS and TS package installation: `npm i -D @stylistic/eslint-plugin`
      - Porpouse: With stylistic rules in ESLint, we are able to achieve similar formatting compatibility while retaining the original code style that reflects the authors/teams' intentions, and apply fixes in one go ([read: Why I don't use Prettier](https://antfu.me/posts/why-not-prettier))

    - Initialize a default ESlint configuration: `npm init @eslint/config@latest`
      - This will add dependencies: `eslint@9.x, globals, @eslint/js`
        - [Rule Severities:](https://eslint.org/docs/latest/use/configure/rules#rule-severities) set the rule ID equal to one of these values:
          - "off" or 0 - turn the rule off
          - "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
          - "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
        - [Add to the enlist.config.mjs](https://eslint.style/packages/js)
        - [Add four rules defined on plugin](https://eslint.style/packages/js#rules)
    - Create a separate npm script for linting in the package.json: `"lint": "eslint ."`
      - alternative to executing the linter from the command line is to configure an eslint-plugin to the editor: [Visual Studio ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
      - it can be a good idea to adopt a ready-made configuration from someone else's project into yours:
        - [AirBnB JS Style Guide](https://github.com/airbnb/javascript) -> A[irbnb's ESlint configuration into use.](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
        - Rules to make my code robust:
        ```
        rules: {
          "@stylistic/js/indent": ["error", 2], // Enforce 2-space indentation
          "@stylistic/js/linebreak-style": ["error", "unix"], // Enforce Unix-style line endings
          "@stylistic/js/quotes": ["error", "double"], // Enforce double quotes
          eqeqeq: "error", // Enforce strict equality comparisons
          "array-callback-return": "error", //Enforce Return Statements in Callbacks
          "no-alert": "warn", // Disallow alert, confirm, and prompt
          "no-eval": "error", // Disallow eval()
          "no-extend-native": "error", // Disallow Extending Native Objects:
          "no-trailing-spaces": "error", // Disallow trailing spaces
          "object-curly-spacing": ["error", "always"], // Enforce spacing around object curly braces
          "arrow-spacing": ["error", { before: true, after: true }], // Enforce spacing around arrow function parameters
          "no-multiple-empty-lines": "error", // Disallow multiple empty lines
          "no-unneeded-ternary": "warn", // Warn on unneeded ternary expressions
          "no-console": 0, // Disable the `no-console` rule
        },
        ```

  - Learnings from Exercise 3.22.

    - ctrl + g --> find line:column fast in vsc
    - It is a little fuzzy the dif between formaters and lint tools, specially if you add the ESLint Stylistic plugin.
    - Talking about formater (using Prettier) I'm getting different results using "ctrl+s" vs "Format document with: prettier". To avoid this:
      - Define the Prettier settings directly in your workspace's settings.json file. Go to the Command Palette (Ctrl+Shift+P) and type Preferences: Open Workspace Settings (JSON).
      - This is the right configuration code for the JSON:
      ```
        {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "git.ignoreLimitWarning": true,
        "prettier.singleQuote": false,
        "prettier.trailingComma": "es5",
        "prettier.tabWidth": 2,
        "prettier.semi": true,
        "prettier.printWidth": 80,
        "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[json]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[html]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[css]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[markdown]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
      }
      ```

## Part 04 [ 21/25hs ] Testing Express servers, user administration

Backnend work. Writing unit and integration tests for the backend. Implementing user authentication and authorization.

- #### Structure of backend application, introduction to testing

  - [Best practice structure](https://dev.to/nermineslimane/always-separate-app-and-server-files--1nc7) of our project === basic for testings

    - Separate the **code taking care of the web server** from the **Express app**.

      - `app.js` -> responsible for setting up the core of the Express application, including middleware, routes, and other configurations.

        - Typical Contents:
          Importing and using middleware (e.g., body-parser, cors, helmet).
          Defining routes by importing route handlers/controllers.
          Setting up error handling middleware.
          Connecting to the database (though sometimes this is done in a separate file).

      - `index.js` -> Application Entry Point and Server Configuration.
        - Responsible for starting the server and handling environment-specific configurations.
        - Typical Contents:
          Importing the Express app from app.js.
          Configuring environment variables.
          Starting the server and listening on a specific port.
          Handling server-related events and logging.

      ```
      ├── index.js
      ├── app.js
      ├── dist
      │   └── ...
      ├── controllers
      │   └── notes.js
      ├── models
      │   └── note.js
      ├── package-lock.json
      ├── package.json
      ├── utils
      │   ├── config.js
      │   ├── logger.js
      │   └── middleware.js
      ```

  - `services` dir -> things that your app provides, either externally or internally.
    - Example: `userService` for saving or retrieving user details.
  - `utils` dir -> tools that you use, to simplify your codes or as a wrapper for external tool.
    - Example: `dateUtil` for parsing or formatting date time values.
    - Creating `utils` dir
      - `config.js`
      - `logger.js`
      - `middleware.js`
      - Extra note about loggin utils: we can send data to external logging service like graylog or papertrail
  - `controllers` dir -> Separate Route handlers into a dedicated module
    - Create a [Router object](https://expressjs.com/en/api.html#router) Capable only of performing middleware and routing functions.
      `const xyzRouter = require("express").Router();`
    - Shorten the paths in the route handlers.
    - Require the route ron the `index.js`
      ```
      const xyzRouter = require('./controllers/notes')
      app.use('/api/xyz', xyzRouter)
      ```
      The router we defined earlier is used if the URL of the request starts with /api/notes
  - Create `app.js`:

    - takes different middleware into use
    - The responsibility of establishing the connection to the database has been given to the app.js module. The model.js file under the models directory only defines the Mongoose schema for notes.

  - module.export variations:

    - module.exportes = { object of functions} -> assign an object directly to module.exports
    - module.exportes = functions ->

    - VS Code allows you to see where your modules have been exported -> right-click on a variable in the location it is exported from and select "Find All References"
      - It will not work if you destructure where you are importing
      - It will not work if you assign an object directly to module.exports

  - Learning from exercises 4.1. to 4.2.
    - **One best practice is to commit your code every time it is in a stable state.** If you try to take a "shortcut" by refactoring many things at once, then Murphy's law will kick in and it is almost certain that something will break in your application. The "shortcut" will end up taking more time than moving forward slowly and systematically.

- #### Testing the backend (automated)

  - [Software Testing Explained in 100 Seconds](https://www.youtube.com/watch?v=u6QfIXgjwGQ)
  - [Test-Driven Development](https://www.youtube.com/watch?v=Jv2uxzhPFl4)
  - There are test libraries or test runners available for JavaScript:

    - The old king of test libraries is [Mocha](https://mochajs.org/), which was replaced a few years ago by [Jest](https://jestjs.io/). A newcomer to the libraries is [Vitest](https://vitest.dev/), which bills itself as a new generation of test libraries.
    - Node also has a built-in test library [node:test](https://nodejs.org/docs/latest/api/test.html)

      - We require inside the .test.js file through `const assert = require("node:assert");`

      - add `"test": "node --test"` to de package.json scripts
      - touch utils/for_testing.js -> add functions that we can use for test
      - mkdir tests -> touch tests//reverse.test.js (to add each test file, this is an example)

        - convention of naming our tests files with the extension .test.js.

        ```
        const { test } = require('node:test') // test defines the keyword test
        const assert = require('node:assert') // library assert which is used by the tests to check the results of the functions under test.

        // the test code
        // ...
        ```

      - `describe("collection name", () => {tests})` blocks can be used for grouping tests into logical collections. The test output also uses the name of the describe block:

        - are necessary when we want to run some shared setup or teardown operations for a group of tests

      - [Differences between various assert module functions Stack Overflow debate.](https://stackoverflow.com/questions/16745855/difference-between-equal-deep-equal-and-strict-equal/73937068#73937068)

  - Learnings from Exercise 4.6. 4.7.

    - [Lodash library](https://lodash.com/docs/4.17.15) -> provides a variety of utility functions:
      - Arrays:
        - `_.countBy(blogs, (blog) => blog.author);` => object where the keys are authors' names + counts
          ```
          {
            "Edsger W. Dijkstra": 1,
            "Mary & bombon": 1,
            "Mr big Dog": 1,
            "Annastasia": 2
          };
          ```
        - `_.maxBy(Object.keys(blogCounts), (author) => blogCounts[author]);`
          - I used Object.keys() because  the result of contBy() is an object and this way its returns an array of the keys (author names) in the blogCounts object.

        - `_.groupBy(blogs, 'author')` groups the blogs by the author's name, resulting in an object where the keys are author names and the values are arrays of blog objects.
        - `_.mapValues(..., group => _.sumBy(group, 'likes'))` maps each group of blogs to the total number of likes for that group.
        
          - **Important note:** This can also be achieved by using reduce() native JS higher function for Grouping and Summing:
            - The reduce function iterates over the blogs array once, accumulating the total likes for each author in the likesPerAuthor object. This approach ensures we only traverse the array a single time.
              - Finding the Maximum Using reduce: The second reduce call finds the author with the maximum likes by comparing the likes of each author.
    
    - Debuggging Node.js Tesst that fail

- #### User administration

- #### Token authentication

- #### Legacy: Testing with Jest

## Part 05 [ 20/21hs ] Testing React apps

## Part 06 [ 20/21hs ] Advanced state management

## Part 07 [ 20/30hs ] React router, custom hooks, styling app with CSS and webpack

## SIDE NOTES - LEARNINGS

- #### Other sources to learn JS
- [JS High order functions playlist by FunFunFunctions](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

- #### Managing UTC dates

  1.  Parsing data inside an object into JavaScript Date object:
  2.  Convert this date and time to UTC.
  3.  Extract the UTC components (year, month, day, hour, minutes) from the Date object.

  ```
  const localDateTimeString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  ```
