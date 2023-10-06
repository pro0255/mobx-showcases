import React from "react";
import { ShowMore } from "./components/ShowMore";
import { MakeObservable } from "./showcases/mobx/MakeObservable";
import { configure } from "mobx";
import { MakeAutoObservable } from "./showcases/mobx/MakeAutoObservable";
import { LazyComponent } from "./components/LazyComponent";
import { ShowMoreChildren } from "./components/ShowMoreChildren";

configure({
  enforceActions: "never",
});

function App() {
  return (
    <div>
      <h1>Showcases</h1>

      <ul>
        <li>
          <h2>Mobx</h2>
          <Mobx />
        </li>
      </ul>
    </div>
  );
}

const Mobx = () => {
  return (
    <ul>
      <li key={MakeObservable.showcaseName}>
        <ShowMore image={MakeObservable} name={MakeObservable.showcaseName} />
      </li>
      <li key={MakeAutoObservable.showcaseName}>
        <ShowMore
          image={MakeAutoObservable}
          name={MakeAutoObservable.showcaseName}
        />
      </li>
      <ShowMoreChildren name={"Override mobx"}>
        <LazyComponent path={`showcases/mobx/OverrideMobx`} />
      </ShowMoreChildren>
    </ul>
  );
};

export default App;
