import { ReactNode, useState } from "react";
import { ShowError } from "./ShowError";

type Props = {
  name: string;
  children: ReactNode;
};

export const ShowMoreChildren = ({ children, name }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h3>{name}</h3>

      <button onClick={() => setIsVisible((oldState) => !oldState)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <ShowError>{children}</ShowError>}
    </div>
  );
};
