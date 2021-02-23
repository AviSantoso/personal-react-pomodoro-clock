import React from "react";

import DEFAULT_POMODORO_CONTEXT from "./DefaultPomodoroContext";
import IPomodoroContext from "./IPomodoroContext";

export const PomodoroContext = React.createContext<IPomodoroContext>(
  DEFAULT_POMODORO_CONTEXT
);

export default PomodoroContext;
