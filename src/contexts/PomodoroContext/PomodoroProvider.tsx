import React from "react";

import DEFAULT_POMODORO_CONTEXT from "./DefaultPomodoroContext";
import PomodoroContext from "./PomodoroContext";

export const PomodoroProvider: React.FunctionComponent = ({ children }) => {
  const [breakLength, setBreakLength] = React.useState(
    DEFAULT_POMODORO_CONTEXT.breakLength
  );

  const [sessionLength, setSessionLength] = React.useState(
    DEFAULT_POMODORO_CONTEXT.sessionLength
  );

  const [secondsLeft, setSecondsLeft] = React.useState(
    DEFAULT_POMODORO_CONTEXT.secondsLeft
  );

  const [running, setRunning] = React.useState(
    DEFAULT_POMODORO_CONTEXT.running
  );

  const [timer, setTimer] = React.useState<number>(-1);

  React.useEffect(() => {
    if (!running) {
      setSecondsLeft(sessionLength * 60);
    }
  }, [running, sessionLength]);

  const tick = () => {
    if (secondsLeft === 0) {
      return;
    }
    setSecondsLeft((p) => p - 1);
  };

  const startTimer = () => {
    if (running) {
      return;
    }
    setTimer(setInterval(tick, 1000));
    setRunning(true);
  };

  const stopTimer = () => {
    if (!running) {
      return;
    }
    clearInterval(timer);
    setTimer(-1);
    setRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setBreakLength(() => DEFAULT_POMODORO_CONTEXT.breakLength);
    setSessionLength(() => DEFAULT_POMODORO_CONTEXT.sessionLength);
    setSecondsLeft(() => DEFAULT_POMODORO_CONTEXT.secondsLeft);
  };

  const incrementBreak = () => {
    if (running || breakLength === 60) {
      return;
    }
    setBreakLength((p) => p + 1);
  };

  const decrementBreak = () => {
    if (running || breakLength === 1) {
      return;
    }
    setBreakLength((p) => p - 1);
  };

  const incrementSession = () => {
    if (running || sessionLength === 60) {
      return;
    }
    setSessionLength((p) => p + 1);
  };

  const decrementSession = () => {
    if (running || sessionLength === 1) {
      return;
    }
    setSessionLength((p) => p - 1);
  };

  const pomodoroContext = {
    breakLength,
    sessionLength,
    secondsLeft,
    running,
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
