import React from "react";
import WelcomeDialog from "../CompositionVsInheritance/WelcomeDialog";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome