import { observer } from "mobx-react";
import React, { Component, FC } from "react";
import { Counter } from "./Counter";
import { Solution } from "../../components/Solution";

type Props = {
  counter: Counter;
  children: FC<Pick<Props, "counter">>;
};

@observer
export class ChildWrapper extends Component<Props> {
  //https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations:~:text=MobX%2Dreact%20will,captured%20locally%20first
  render() {
    return (
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Solution
          link={
            "https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations:~:text=MobX%2Dreact%20will,captured%20locally%20first"
          }
        />
        <div>{this.props.children({ counter: this.props.counter })}</div>
      </div>
    );
  }
}
