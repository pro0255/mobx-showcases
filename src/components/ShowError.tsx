import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

export function fallbackRender({ error }: any) {
  console.error(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export const ShowError = ({ children }: Props) => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
  );
};
