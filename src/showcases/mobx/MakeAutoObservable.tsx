import { ImageType } from "../../types";
import { makeAutoObservable } from "mobx";

export class MakeAutoObservable implements ImageType {
  public static showcaseName: string = "Make auto observable!";

  public value: number = 1;

  action = () => {
    this.value++;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
