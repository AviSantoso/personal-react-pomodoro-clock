import React from "react";
import PomodoroContext from "./PomodoroContext";

export const usePomodoro = () => React.useContext(PomodoroContext);

export default usePomodoro;
