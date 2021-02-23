import React from "react";

import DEFAULT_POMODORO_CONTEXT from "./DefaultPomodoroContext";
import IPomodoroContext from "./IPomodoroContext";
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

  const isCountingDown = () => timer !== -1;

  const startTimer = () => {
    if (isCountingDown()) {
      return;
    }
    setTimer(setInterval(tick, 50));
    setIsStarted(true);
  };

  const stopTimer = () => {
    if (!isCountingDown()) {
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
    setBreakLength((breakLength) => {
      if (isStarted || breakLength === 60) {
        return breakLength;
      }
      return breakLength + 1;
    });
  };

  const decrementBreak = () => {
    setBreakLength((breakLength) => {
      if (isStarted || breakLength === 1) {
        return breakLength;
      }
      return breakLength - 1;
    });
  };

  const incrementSession = () => {
    setSessionLength((sessionLength) => {
      if (isStarted || sessionLength === 60) {
        return sessionLength;
      }
      return sessionLength + 1;
    });
  };

  const decrementSession = () => {
    setSessionLength((sessionLength) => {
      if (isStarted || sessionLength === 1) {
        return sessionLength;
      }
      return sessionLength - 1;
    });
  };

  const pomodoroContext: IPomodoroContext = {
    breakLength,
    sessionLength,
    secondsLeft,
    isStarted,
    isBreak,
    get isCountingDown() {
      return isCountingDown();
    },
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
