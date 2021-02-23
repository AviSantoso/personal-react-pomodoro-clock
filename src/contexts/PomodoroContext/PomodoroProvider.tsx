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

  const [isStarted, setIsStarted] = React.useState(
    DEFAULT_POMODORO_CONTEXT.isStarted
  );

  const [isBreak, setIsBreak] = React.useState(
    DEFAULT_POMODORO_CONTEXT.isBreak
  );

  const [timer, setTimer] = React.useState<number>(-1);

  React.useEffect(() => {
    setSecondsLeft(isBreak ? breakLength * 60 : sessionLength * 60);
  }, [isBreak, sessionLength, breakLength]);

  const tick = () => {
    setSecondsLeft((secondsLeft) => {
      if (secondsLeft <= 0) {
        setIsBreak((isBreak) => !isBreak);
        return secondsLeft;
      }
      return secondsLeft - 1;
    });
  };

  const startTimer = () => {
    if (timer !== -1) {
      return;
    }
    setTimer(setInterval(tick, 50));
    setIsStarted(true);
  };

  const stopTimer = () => {
    if (timer === -1) {
      return;
    }
    clearInterval(timer);
    setTimer(-1);
  };

  const resetTimer = () => {
    stopTimer();
    setIsStarted(DEFAULT_POMODORO_CONTEXT.isStarted);
    setIsBreak(DEFAULT_POMODORO_CONTEXT.isBreak);
    setBreakLength(() => DEFAULT_POMODORO_CONTEXT.breakLength);
    setSessionLength(() => DEFAULT_POMODORO_CONTEXT.sessionLength);
    setSecondsLeft(() => DEFAULT_POMODORO_CONTEXT.secondsLeft);
  };

  const incrementBreak = () => {
    if (isStarted || breakLength === 60) {
      return;
    }
    setBreakLength((p) => p + 1);
  };

  const decrementBreak = () => {
    if (isStarted || breakLength === 1) {
      return;
    }
    setBreakLength((p) => p - 1);
  };

  const incrementSession = () => {
    if (isStarted || sessionLength === 60) {
      return;
    }
    setSessionLength((p) => p + 1);
  };

  const decrementSession = () => {
    if (isStarted || sessionLength === 1) {
      return;
    }
    setSessionLength((p) => p - 1);
  };

  const pomodoroContext = {
    breakLength,
    sessionLength,
    secondsLeft,
    isStarted,
    isBreak,
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
