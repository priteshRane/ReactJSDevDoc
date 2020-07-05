import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Comment from "./components/Comment";
import ActionLink from "./components/ActionLink";
import Toggle from "./components/Toggle";
import LoggingButton from "./components/LoggingButton";
import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl";
import Mailbox from "./components/Mailbox";
import Page from "./components/Page"
import NumberList from "./components/NumberList";
import Blog from "./components/Blog"
import NameForm from './components/NameForm'
import Calculator from './components/LiftingStateUp/Calculator'

function App() {
  const author = {
    avatarUrl: logo,
    name: "Rajiv",
  };

  const messages = ["React", "Re: React", "Re:Re: React"];

  const checkIfLogin = false

  const numbers = [1, 2, 3, 4, 5]

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* Composing components */}
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Comment
        author={author}
        text="Text from App to Comment"
        date="03-07-2020"
      />
      <ActionLink />
      <Toggle />
      <LoggingButton />
      <div>The use is <b>{checkIfLogin ? "currently" : "not"}</b> logged in.</div>
      <Greeting isLoggedIn={false} />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
      <NumberList numbers={numbers}/>
      <Blog posts={posts} />
      <NameForm />
      <Calculator />
    </div>
  );
}

export default App;
