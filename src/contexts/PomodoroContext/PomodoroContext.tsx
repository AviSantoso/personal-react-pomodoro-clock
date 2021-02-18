import React from "react";

import defaultPomodoroContext from "./defaultPomodoroContext";
import IPomodoroContext from "./IPomodoroContext";

export const PomodoroContext = React.createContext<IPomodoroContext>(
  defaultPomodoroContext
);

export default PomodoroContext;
