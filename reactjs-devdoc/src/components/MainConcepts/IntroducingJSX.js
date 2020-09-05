import React from "react";
import logo from "../../logo.svg";

function IntroducingJSX() {
  //Embedding Expressions in JSX (example 1):
  const name = "Josh Perez";
  const element = <h1>Hello, {name}</h1>;

  // Embedding Expressions in JSX (example 2):
  const user = {
    firstName: "Harper",
    lastName: "Parez",
    image: logo,
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  //JSX is an Expression Too:
  function getGreeting(isUser) {
    if (isUser) {
      return <h1>Hello, {formatName(user.firstName)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div>
      <h3 style={{color: 'red'}}>Introducing JSX example:</h3>
      <h3>Embedding Expressions in JSX (example 1):</h3>
      {element}

      <h3>Embedding Expressions in JSX (example 2):</h3>
      <h1>Hello, {formatName(user)}</h1>

      <h3>JSX is an Expression Too example:</h3>
      {getGreeting(false)}
    </div>
  );
}

export default IntroducingJSX;
