import React from "react";
import { ShowMore } from "./components/ShowMore";
import { MakeObservableError } from "./showcases/mobx/MakeObservableError";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

function App() {
  return (
    <div>
      <h1>Showcases</h1>
      <ul>
        <li>
          <ShowMore
            image={MakeObservableError}
            name={MakeObservableError.showcaseName}
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
