import { ImageType } from "../../types";
import { makeAutoObservable } from "mobx";

export class MakeAutoObservable implements ImageType {
  public static showcaseName: string = "Make auto observable!";

  public static link =
    "https://github.com/pro0255/mobx-showcases/blob/main/src/showcases/mobx/MakeAutoObservable.tsx";

  public value: number = 1;

  action = () => {
    this.value++;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
