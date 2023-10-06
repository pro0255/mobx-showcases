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
import { GithubLink } from "./components/GithubLink";
import { Playground } from "./components/Playground";

configure({
  enforceActions: "never",
});

function App() {
  return (
    <div>
      <h1>Showcases</h1>

      <ul>
        <li>
          <ShowMoreChildren name={"Mobx"}>
            <Mobx />
          </ShowMoreChildren>
        </li>

        <hr />

        <li>
          <ShowMoreChildren name={"Mobx react"}>
            <MobxReact />
          </ShowMoreChildren>
        </li>

        <li>
          <ShowMoreChildren name={"Typescript"}>
            <Typescript />
          </ShowMoreChildren>
        </li>
      </ul>
    </div>
  );
}

const Typescript = () => {
  return (
    <ul>
      <li>
        <GithubLink
          link={
            "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/typescript/Declare.tsx"
          }
        />
        <h3>Declare</h3>
        <Playground
          link={
            "https://www.typescriptlang.org/play?useDefineForClassFields=true&experimentalDecorators=true#code/MYewdgzgLgBAlmAVgU2LAvDAFABwE4hQgBcMAhmAJ4A0MYZAtsqQAoE7J5SUDSylAShjoAfDADeAKBgwA8gCMUaAHQATZADMEyNiA5dKuAkVr0mtKTJkBzZFCxDLVmXjsBXPGBgBGAAwBuaSsAX2og4IFA4MDJSWAAGzIICBgAEVRE1wkggAEEJSggnDd5eLhgGHUEsizXMlVweMoYCE4AN3LmcioYmVBIKDw3NBA8BwlgyUm48Gg0gFEAYQAZAEEAJXmAfQRoCmBkYTpkAHc0jJrkBxj+iBB45GV4kGssVKW1zZ2B-cfWvA6B0ikiAA"
          }
        />
      </li>

      <li>
        <GithubLink
          link={
            "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/typescript/ParentAndChild.tsx"
          }
        />
        <h3>Parent and child</h3>
        <Playground
          link={
            "https://www.typescriptlang.org/play?useDefineForClassFields=true&experimentalDecorators=true#code/PTAWBdwBwZwLhAd2QOnATygUxgYwE4CWU4ANgIYB2A5igPb7XBQXoD8ArjFgCJYBmhSlgBiDAMIUYMEYSykAJjAC84fBywAyLAA9sRALZZK4cqT64G5cAxVqNAYksKswALIBNAOKJQ1AF6gAIIAojziAAxeABwAQgCKAIx04rjiBrEAEkEAGgBybkEK1ABSAKwAkvgAKkE8AEyxIUEAMgbUANIA7EERAGp0QQCqQaQVBuQAVvGxHuIA6s2ZAMoeMBGtOgpDEQC0mdQ8ANYwAPIK9dSx-G6E4ABKFYnLQyWx1EGg5O9BWHk8QXiQQMbiwblIy0I0VAIQMQ3wQwAbJMAFoGCKIgDMUBCWA+uDc1USFRRAAUjiF7gAjIJHKBeebUUDzf6gIZA8govpAiqY0gAThK9yOiT6PD64BEiSgdD6t3EANimPImQipyGnQ6zV8zUGuESKKG0Q6OnqQ0IQQAUBhsAACe5YACOHEI+CwRhMpPIbpMtuUtoA3pbbbb+FhwLhQJD-Fg4LbKBwDFSsPgANyWgC+6etmCw9qdLrdHvA4lAhEUfsDwdtDBc+DjACJyHgG7aAD62hsuFvpjO2zT552u93GcBen3gbO4KQwW3j0dVkNQDhU0iEXC2t2OuMOodF0fzkzZkOWSgwey4Gz4AAUAEpFyHbeAyzAUFvK0HH4+wxGo4QY3GiQRAANNWIZZmBtqnjAdCkFgKCkHQ1DXs+hCvlut7puBmaWpa07NrOpblgotq6OAxhKHO3oLp+togLaIgVDkcZFCR5C2i4+FutWIDLqu64cVgXF5luO4FsOxZEYoWG2nxa4bqJg6FiOJhSQox5QXQZ4Xled4PiGMAcPod4ySGqHoU6H6QSG9EAALgDAuyENQlAMFg1m2igXnmW+TqgV+Ia1imjbdrgDb+Y+EFftBsHwYhyE+Rhpl0cAtotEhs4BjW+B1nGADkoWthm1bFcVeFaeesnUSYAD6QjnlQuB5v6wiIFRE4meV2lQWWih1dpjXNfGWBtWpnVAA"
          }
        />
      </li>

      <li>
        <GithubLink
          link={
            "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/typescript/ThisBeforeConstructor.tsx"
          }
        />
        <h3>This before constructor</h3>
        <Playground
          link={
            "https://www.typescriptlang.org/play?useDefineForClassFields=true&experimentalDecorators=true#code/MYGwhgzhAEAqAWBLCAhApgMwPYCc0GEsA7CAFxwFdhTdoBvAKGmgAcKAjERYaDRHMgDkwAWzQBuJqw5ceENMGIATYWMlTFJclRo4AFAEp6U5qSQQAdHwGlVaaAF5oAIgBqWAFakwzyc1PmFvKaKqL2Ts4ACjhYANZYLL5SAL4MUgD06dAAAqQQALSIAOZEuGhSbJzcvBQgIHaO0GbIVvxCYdAA1E2Bwcp26syZ0ADKWCAUpIjE0ACMFtBKmIhE9isQiEvQWBjQmmSU1LgZWZWyNXV2AFzQBytFftCZJ3vEBzq4hsZDWQEt1u0xI03J5vEkfv5mpY+kRQkCItE4glwU9fj1-rV6h0nFDWjYGt1cTC4RIXqkXmMJlMZgAmBYUeTQIpoUikNA4F5narM0gXLFiL6MCHMPCkCg4IjoywA2wdQm9BT9MKPYapVJAA"
          }
        />
      </li>
    </ul>
  );
};

const MobxReact = () => {
  const [counter] = useState(new Counter());

  return (
    <ul>
      <li>
        <ShowError>
          <ShowMoreChildren
            link={
              "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx-react/ComputedPropsAndState.tsx"
            }
            name={"mobx-react computed"}
          >
            <ComputedPropsAndState counter={counter} />
          </ShowMoreChildren>
        </ShowError>
      </li>

      <hr />

      <li>
        <ShowMoreChildren
          link={
            "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx-react/ActionsProps.tsx"
          }
          name={"mobx-react actions"}
        >
          <LazyComponent path={`showcases/mobx-react/ActionsProps`} />
        </ShowMoreChildren>
      </li>

      <hr />

      <li>
        <ShowMoreChildren
          link={
            "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx-react/ChildWrapper.tsx"
          }
          name={"mobx-react actions"}
        >
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

      <>
        <GithubLink
          link={
            "github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx/OverrideMobx.tsx"
          }
        />
        <ShowMoreChildren name={"Override mobx"}>
          <LazyComponent path={`showcases/mobx/OverrideMobx`} />
        </ShowMoreChildren>
      </>
    </ul>
  );
};

export default App;
