import React from "react";

// Function and Class Components
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// OR

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
