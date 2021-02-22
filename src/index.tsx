import { render } from "react-dom";

import App from "./App";

import { PomodoroProvider } from "./contexts";

const rootElement = document.getElementById("root");
render(
  <PomodoroProvider>
    <App />
  </PomodoroProvider>,
  rootElement
);
