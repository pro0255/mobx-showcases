import { ImageType } from "../../types";
import { makeAutoObservable, observable } from "mobx";

export class Counter implements ImageType {
  @observable
  public value: number = 1;

  action = () => {
    this.value++;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
