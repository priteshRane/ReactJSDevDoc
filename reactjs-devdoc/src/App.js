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
import ExampleFromIntroducingHooks from './components/HooksExamples/IntroducingHooks/Example'
import ExampleStateFunction from './components/HooksExamples/UsingTheStateHook/ExampleStateFunction'
import ExampleStateClass from './components/HooksExamples/UsingTheStateHook/ExampleStateClass'

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
      <ExampleFromIntroducingHooks />
      <h2 style={{color: "red"}}>Using the State Hook</h2>
      <h3 style={{color: "blue"}}>State with function example:</h3>
      <ExampleStateFunction />
      <h3 style={{color: "blue"}}>State with class example:</h3>
      <ExampleStateClass />
    </div>
  );
}

export default App;
