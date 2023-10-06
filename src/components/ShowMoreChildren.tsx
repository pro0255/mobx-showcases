import { ReactNode, useState } from "react";
import { ShowError } from "./ShowError";
import { GithubLink } from "./GithubLink";

type Props = {
  name: string;
  children: ReactNode;
  link?: string;
};

export const ShowMoreChildren = ({ children, name, link }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {link && <GithubLink link={link} />}

      <h3>{name}</h3>

      <button onClick={() => setIsVisible((oldState) => !oldState)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <ShowError>{children}</ShowError>}
    </div>
  );
};
