# Learning React

# what is crossorigin

# Parcel

- parceljs.org
- Dev Build
- Creates a Local Server
- HMR = Hot module replacement
- File Watching algorithm which is written in c++
- Caching which gives faster builds faster development experience
- Image optimization
- If we create a production build it will minification of our File
- Bundling
- compress our file(removing whitespaces and many more)
- consistent hashing
- code splitting
- Differential Bundling - support older browsers
- Diagnostics behind the app
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and production bundles
- prod build

# Browserlist

- to tell browser which browser will support the website
- it is an npm package(read about it)

# packages

- npm init
- npm install -D parcel
- npx parcel index.html(to run the app)
  //To install react
- npm install react
- npm i react-dom

# to run this project use command,

- npx parcel index.html
  But, if you have configured the scripts in package.json then use this command,
- npm run start/npm start (any)
  note: npm build command will not work,we have to use npm run build

# For Practice:

// const parent = React.createElement(
// "h1",
// { id: "parent" },"I am an H1 tag")

// const parent = React.createElement(
// "div",
// { id: "parent" },
// [React.createElement(
// "div",
// { id: "child" },
// [React.createElement(
// "h1",
// {},
// "I am an H1 tag"
// ),React.createElement(
// "h2",
// {},
// "I am an H2 tag"
// )]
// ),React.createElement(
// "div",
// { id: "child" },
// [React.createElement(
// "h1",
// {},
// "I am an H1 tag"
// ),React.createElement(
// "h2",
// {},
// "I am an H2 tag"
// )]
// )]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

# JSX

- JSX is not HTML in javascript
- It has HTML like syntaxes
- Read all the types of tag in JSX
- in a function, in JSX part if any javascript code written anywhere within a curly braces, it is valid
- if code is of more than one line, it is wrapped inside the round brackets so that babel understands where it started and ended
- JSX code is transpiled before it goes to javascript engine
- Parcel is transpiling the code by giving it to one of it's package called babel
- babel takes the JSX code and tanspiles it to the code that browser/JS engine/React understands

# babel

- Read about it
- babel transpiles JSX to React.createElement

# React Components

- Class Based Components - OLD
- Functional Components - NEW

# React Functional Components

- ALways start component's name with a capital letter
- It is a normal javascript arrow function but it returns a JSX
- it is rendered using this syntax:
  root.render(<HeadingComponent />)

# How to create functional components:

- // const Heading = () => {
  // return <h1>Good Afternoon</h1>
  // };

  // const HeadComp = () => (
  // <div>
  // <Heading />
  // <h1 id="heading">Good Morning</h1>
  // </div>
  // );

# Config driven UI

# Always use a key in the map

# why index as a key in map is bad practice?

# Two types of import/export:

- Default Export/Import

export default <component_name>;
import <component_name> from "path";

- Named Export/Import

export const <component_name>;
import {component_name} from "path";

# React Hooks
(They are normal JS utility functions)
- useState() - Superpowerful State Variables in react
    we have to import it like this to use:
    import {useState} from "react";

    whenever state changes, react triggers recociliation cycle and re-renders the component
    
- useEffect() - After the body component is rendered, the useEffect component will immediately be called on every render if no dependencies are there or it is empty

# Read about React Fibre

# Reconciliation Algorithm

# Incremental Rendering

# React is fast and doing effective DOM manipulation because it has a virtual DOM and it has a diff algorithm which is very efficient....it can find out the diff and update the UI

# Routing in Web Apps
- Client side Routing
- Server Side Routing