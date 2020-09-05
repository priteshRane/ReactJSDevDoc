import React from "react";
import Welcome from "./Welcome";
import logo from "../../../logo.svg";
import Comment from "./Comment";

function ComponentsAndProps() {
  const author = {
    avatarUrl: logo,
    name: "Mahesh",
    date: "03-07-2020",
  };
  
  return (
    <div>
      <h3 style={{color: 'red'}}>Components and Props example:</h3>
      <h3>Rendering a Component:</h3>
      <Welcome name="Sara" />

      <h3>Composing Components:</h3>
      <Welcome name="Cahal" />
      <Welcome name="Edite" />

      <h3>Extracting Components</h3>
      <Comment author={author} text="This is sample text!" />
    </div>
  );
}

export default ComponentsAndProps;
