import { makeObservable } from "mobx";
import { ImageType } from "../../types";

export class MakeObservable implements ImageType {
  public static showcaseName: string =
    "[MobX] No annotations were passed to makeObservable, but no decorated members have been found either";

  public value: number = 1;

  action = () => {
    console.log(MakeObservable.prototype);
    this.value++;
  };

  constructor() {
    makeObservable(this);
  }
}
