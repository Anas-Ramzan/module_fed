import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

export default function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading remote components...</div>}>
        <RemoteHeader />
        <RemoteButton text="Click Me" onClick={() => alert("Clicked!")} />
      </Suspense>
    </div>
  );
}
