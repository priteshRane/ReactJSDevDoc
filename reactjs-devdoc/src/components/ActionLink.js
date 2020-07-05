import React from "react";

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return <a href="#" onClick={handleClick}>Click Me</a>;
}

export default ActionLink;