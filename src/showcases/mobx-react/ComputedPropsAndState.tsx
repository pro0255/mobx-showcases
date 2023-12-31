import { observer } from "mobx-react";
import { computed } from "mobx";
import React from "react";
import { Counter } from "./Counter";
import { ObserverView } from "../../components/ShowMore";
import { Solution } from "../../components/Solution";

// https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations

type Props = {
  counter: Counter;
};

@observer
export class ComputedPropsAndState extends React.Component<Props> {
  // BROKEN! <-- @computed should be removed in mobx-react > 7
  @computed
  get doubleValue() {
    return this.props.counter.value * 2;
  }

  render() {
    return (
      <div>
        <Solution
          link={
            "https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations:~:text=Note%20on%20using,this.props."
          }
        />
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <ObserverView
            instance={{
              value: this.doubleValue,
              action: this.props.counter.action,
            }}
          />
        </div>
      </div>
    );
  }
}
