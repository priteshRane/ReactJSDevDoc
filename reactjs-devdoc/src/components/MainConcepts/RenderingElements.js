import React from "react";

function RenderingElements() {
  function tick() {
    return (
      <div>
        <h3 style={{color: 'red'}}>Rendering elements example:</h3>
        <h3>Updating the Rendered Element example:</h3>
        <h1>It is {new Date().toLocaleTimeString()}.</h1>
      </div>
    );
  }

  setInterval(tick(), 1000)

  return <div>{tick()}</div>;
}

export default RenderingElements;
