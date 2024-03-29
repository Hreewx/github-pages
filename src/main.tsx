import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index.tsx";

import { Provider } from "react-redux";
import { store } from "./shared/api/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
