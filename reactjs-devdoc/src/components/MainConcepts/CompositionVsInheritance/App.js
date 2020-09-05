import React from "react";
import SplitPane from "./SplitPane";
import Contacts from "./Contacts";
import Chat from "./Chat";

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
