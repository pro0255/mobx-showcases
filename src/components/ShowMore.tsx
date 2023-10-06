import { useState } from "react";
import { ImageType } from "../types";
import { observer } from "mobx-react";

type Props = {
  name: string;
  image: any;
};

export const ShowMore = ({ image, name }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => setIsVisible((oldState) => !oldState)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <View image={image} />}
    </div>
  );
};

type ViewProps = {
  image: any;
};

const View = ({ image }: ViewProps) => {
  const [instance] = useState<ImageType>(new image());

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <ObserverView instance={instance} />
    </div>
  );
};

type ObserverViewProps = {
  instance: ImageType;
};

const ObserverView = observer(({ instance }: ObserverViewProps) => {
  return (
    <div>
      This is value {instance.value}
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <button onClick={instance.action}>Action</button>
      </div>
    </div>
  );
});