import React from "react";
import WelcomeDialog from "./WelcomeDialog";
import WelcomeDialog2 from "./WelcomeDialog2";
import App from "./App";
import SignUpDialog from './SignUpDialog'

function CompositionVsInheritance() {
  return (
    <div>
      <h3 style={{ color: 'red' }}>Composition vs Inheritance</h3>
      <h3>Containment example: </h3>
      <WelcomeDialog />
      <App />

      <h3>Specialization example 1: </h3>
      <WelcomeDialog2 />

      <h3>Specialization example 2: </h3>
      <SignUpDialog />

      <br />
      <br />
    </div>
  );
}

export default CompositionVsInheritance;
