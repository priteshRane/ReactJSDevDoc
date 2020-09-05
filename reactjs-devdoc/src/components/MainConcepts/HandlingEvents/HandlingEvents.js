import React from "react";
import ActionLink from "./ActionLink";
import Toggle from "./Toggle";
import LoggingButton from "./LoggingButton";

function HandlingEvents() {
  return (
    <div>
      <h3 style={{ color: "red" }}>Handling Events example</h3>
      <ActionLink />
      <br />
      <Toggle />
      <br />
      <LoggingButton />
      <br />
    </div>
  );
}

export default HandlingEvents;
