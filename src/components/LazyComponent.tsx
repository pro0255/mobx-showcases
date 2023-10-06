import React, { useEffect, useState } from "react";
import { fallbackRender, ShowError } from "./ShowError";

type Props = {
  path: string;
};
export const LazyComponent = React.memo(({ path }: Props) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const { View } = await import(`../${path}`);

        console.log(View);
        setState({
          type: "OK",
          data: View,
        });
      } catch (e) {
        setState({
          type: "ERROR",
          data: e,
        });
      }
    }

    load();
  }, []);

  if (state === null) {
    return <div>Loading...</div>;
  }

  if (state.type === "ERROR") {
    return <>{fallbackRender({ error: state.data })}</>;
  }

  return (
    <ShowError>
      <state.data />
    </ShowError>
  );
});
