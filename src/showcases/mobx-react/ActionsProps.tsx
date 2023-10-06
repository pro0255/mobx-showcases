import { Counter } from "./Counter";
import { observer } from "mobx-react";
import { autorun, observable } from "mobx";
import React, { Component, useState } from "react";
import { fallbackRender } from "../../components/ShowError";
import { Solution } from "../../components/Solution";

type Props = {
  counter: Counter;
};

@observer
class ActionsProps extends Component<Props> {
  @observable
  private error: any = null;

  componentDidMount() {
    autorun(() => {
      try {
        // Here is the problem we are reading a props inside of action
        // Migration -> https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations
        console.log(this.props.counter);
      } catch (e: any) {
        console.error(e);
        this.error = e;
      }
    });
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (!this.error) {
      return null;
    }
    return (
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Solution
          link={
            "https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations"
          }
        />
        <div>{fallbackRender({ error: this.error })}</div>
      </div>
    );
  }
}

export const View = () => {
  const [counter] = useState(new Counter());

  return <ActionsProps counter={counter} />;
};
