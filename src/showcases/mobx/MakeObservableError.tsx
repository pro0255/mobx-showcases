import { observable } from "mobx";
import { ImageType } from "../../types";

export class MakeObservableError implements ImageType {
  public static showcaseName: string = "Missing make observable in constructor";

  @observable
  public value: number = 1;

  action = () => {
    this.value++;
  };
}
