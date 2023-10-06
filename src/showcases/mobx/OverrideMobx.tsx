import { makeObservable, observable } from "mobx";
import { ImageType } from "../../types";
import { ShowError } from "../../components/ShowError";
import { ShowMore } from "../../components/ShowMore";
import React from "react";

class MakeObservableParent implements ImageType {
  public static showcaseName: string = "Parent";

  @observable
  public addToValue = 1;

  @observable
  public value: number = 1;

  constructor() {
    makeObservable(this);
  }

  action = () => {
    this.value++;
  };
}

export class OverrideMobx extends MakeObservableParent {
  public static showcaseName: string = "Override child";

  @observable
  public addToValue = 2;

  public static link =
    "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx/OverrideMobx.tsx";

  constructor() {
    super();
    makeObservable(this);
  }

  action = () => {
    this.value = this.value + this.addToValue;
  };
}

export const View = () => {
  return (
    <ShowError>
      <li key={OverrideMobx.showcaseName}>
        <ShowMore image={OverrideMobx} name={OverrideMobx.showcaseName} />
      </li>
    </ShowError>
  );
};
