import React from "react";
import FancyBorder from "./FancyBorder";
import Dialog from "./Dialog";

function WelcomeDialog() {
  return (
    <div>
      <FancyBorder color="blue">
        <h1>Welcome</h1>
        <p>Thank you for visiting our spacecraft!</p>
      </FancyBorder>
      <br />
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!"
      />
    </div>
  );
}

export default WelcomeDialog;
