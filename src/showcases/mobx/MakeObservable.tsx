import { makeObservable } from "mobx";
import { ImageType } from "../../types";

export class MakeObservable implements ImageType {
  public static showcaseName: string =
    "[MobX] No annotations were passed to makeObservable, but no decorated members have been found either";

  public value: number = 1;

  public static link =
    "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx/MakeObservable.tsx";

  action = () => {
    console.log(MakeObservable.prototype);
    this.value++;
  };

  constructor() {
    makeObservable(this);
  }
}
