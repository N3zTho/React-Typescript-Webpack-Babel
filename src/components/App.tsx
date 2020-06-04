import React, { Suspense, lazy } from "react";

const Message = lazy(() => import("./Message"));

export interface AppProps {
  compiler: string;
  framework: string;
}

const App: React.FC<AppProps> = ({ compiler, framework }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>{process.env.APP_NAME}</h1>
        <h2>
          Hello from {compiler} and {framework}!
        </h2>

        <Message msg="Message from props" />
      </Suspense>
    </>
  );
};

export default App;
