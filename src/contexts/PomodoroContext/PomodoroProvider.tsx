import React from "react";

import defaultPomodoroContext from "./defaultPomodoroContext";
import PomodoroContext from "./PomodoroContext";

export const PomodoroProvider: React.FunctionComponent = ({ children }) => {
  const [breakLength, setBreakLength] = React.useState(
    defaultPomodoroContext.breakLength
  );

  const [sessionLength, setSessionLength] = React.useState(
    defaultPomodoroContext.sessionLength
  );

  const [secondsLeft, setSecondsLeft] = React.useState(
    defaultPomodoroContext.secondsLeft
  );

  const [timer, setTimer] = React.useState<number | null>(null);

  const tick = () => {
    setSecondsLeft((p) => p - 1);
  };

  const startTimer = () => {
    setTimer((p) => {
      if (timer === null) {
        return p;
      }
      return setInterval(tick, 1000);
    });
  };

  const stopTimer = () => {
    setTimer((p) => {
      if (p === null) {
        return p;
      }
      clearInterval(p);
      return null;
    });
  };

  const resetTimer = () => {
    stopTimer();
    setBreakLength(() => defaultPomodoroContext.breakLength);
    setSessionLength(() => defaultPomodoroContext.sessionLength);
    setSecondsLeft(() => defaultPomodoroContext.secondsLeft);
  };

  const incrementBreak = () => setBreakLength((p) => p + 1);
  const decrementBreak = () => setBreakLength((p) => p - 1);
  const incrementSession = () => setSessionLength((p) => p + 1);
  const decrementSession = () => setSessionLength((p) => p - 1);

  const pomodoroContext = {
    breakLength,
    sessionLength,
    secondsLeft,
    startTimer,
    stopTimer,
    resetTimer,
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession
  };

  return (
    <PomodoroContext.Provider value={pomodoroContext}>
      {children}
    </PomodoroContext.Provider>
  );
};
