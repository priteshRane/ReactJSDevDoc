import React from "react";
import "./App.css";

import HelloWorld from './components/MainConcepts/HelloWorld'
import IntroducingJSX from './components/MainConcepts/IntroducingJSX'
import RenderingElements from './components/MainConcepts/RenderingElements'
import ComponentsAndProps from './components/MainConcepts/ComponentsAndProps/ComponentsAndProps'
import StateAndLifecycle from './components/MainConcepts/StateAndLifecycle/StateAndLifecycle'
import HandlingEvents from './components/MainConcepts/HandlingEvents/HandlingEvents'
import ConditionalRendering from './components/MainConcepts/ConditionalRendering/ConditionalRendering'
import ListsAndKeys from './components/MainConcepts/ListsAndKeys/ListsAndKeys'
import NameForm from './components/MainConcepts/NameForm'
import Calculator from './components/MainConcepts/LiftingStateUp/Calculator'
import CompositionVsInheritance from './components/MainConcepts/CompositionVsInheritance/CompositionVsInheritance'

function App() {
  return (
    <div>
      <HelloWorld />
      <IntroducingJSX />
      <RenderingElements />
      <ComponentsAndProps />
      <StateAndLifecycle />
      <HandlingEvents />
      <ConditionalRendering />
      <ListsAndKeys />
      <NameForm />
      <Calculator />
      <CompositionVsInheritance />
    </div>
  );
}

export default App;
