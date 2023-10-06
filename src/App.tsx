import React, { useState } from "react";
import { ShowMore } from "./components/ShowMore";
import { MakeObservable } from "./showcases/mobx/MakeObservable";
import { configure } from "mobx";
import { MakeAutoObservable } from "./showcases/mobx/MakeAutoObservable";
import { LazyComponent } from "./components/LazyComponent";
import { ShowMoreChildren } from "./components/ShowMoreChildren";
import { Counter } from "./showcases/mobx-react/Counter";
import { ComputedPropsAndState } from "./showcases/mobx-react/ComputedPropsAndState";
import { ShowError } from "./components/ShowError";
import { ChildWrapper } from "./showcases/mobx-react/ChildWrapper";

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

        <hr />

        <li>
          <h2>Mobx react</h2>
          <MobxReact />
        </li>
      </ul>
    </div>
  );
}

const MobxReact = () => {
  const [counter] = useState(new Counter());

  return (
    <ul>
      <li>
        <ShowError>
          <ComputedPropsAndState counter={counter} />
        </ShowError>
      </li>

      <hr />

      <li>
        <ShowMoreChildren name={"mobx-react actions"}>
          <LazyComponent path={`showcases/mobx-react/ActionsProps`} />
        </ShowMoreChildren>
      </li>

      <hr />

      <li>
        <ShowMoreChildren name={"mobx-react actions"}>
          <ChildWrapper counter={counter}>
            {({ counter }) => <div>Value is {counter.value}</div>}
          </ChildWrapper>
        </ShowMoreChildren>
      </li>
    </ul>
  );
};

const Mobx = () => {
  return (
    <ul>
      <li key={MakeObservable.showcaseName}>
        <ShowMore image={MakeObservable} name={MakeObservable.showcaseName} />
      </li>
      <hr />

      <li key={MakeAutoObservable.showcaseName}>
        <ShowMore
          image={MakeAutoObservable}
          name={MakeAutoObservable.showcaseName}
        />
      </li>
      <hr />

      <ShowMoreChildren name={"Override mobx"}>
        <LazyComponent path={`showcases/mobx/OverrideMobx`} />
      </ShowMoreChildren>
    </ul>
  );
};

export default App;
