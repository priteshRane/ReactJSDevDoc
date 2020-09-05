import React from "react";
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import Mailbox from './Mailbox'
import Page from './Page'

function ConditionalRendering() {
  const checkIfLogin = false;
  const messages = ["React", "Re: React", "Re:Re: React"];

  return (
    <div>
      <h3 style={{ color: 'red' }}>Conditional Rendering example:</h3>
      <div>
        The user is <b>{checkIfLogin ? "currently" : "not"}</b> logged in.
      </div>
      <Greeting isLoggedIn={false} />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
    </div>
  );
}

export default ConditionalRendering;
