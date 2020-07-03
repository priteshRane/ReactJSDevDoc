import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import logo from "./logo.svg";
import Welcome from './components/Welcome'
import Clock from "./components/Clock";

// Embedding expression in JSX
// example 1
const element1 = <h1>Hello World!</h1>;

// example 2
const name = "Pritesh Rane";
const element2 = <h1>Hello, {name}</h1>;

// example 3
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Pritesh",
  lastName: "Rane",
  image: logo,
};

const element3 = <h1>Hello, {formatName(user)}</h1>;

// JSX is an Expression Too
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element4 = getGreeting(user);

// Specifiying attributes with JSX
const element5 = <img src={user.image}></img>;

// Updating the Rendered Element
function tick() {
  const element = (
      <Clock />
  );

  ReactDOM.render(element, document.getElementById(('root')))
}

setInterval(tick, 1000)

// Rendering a Component
const element6 = <Welcome name="Sara" />

// ReactDOM.render(
//   // element3,
//   // element4,
//   // element5,
//   // element6,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
