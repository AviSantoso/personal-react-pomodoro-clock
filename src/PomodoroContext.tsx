import React from "react";

export interface IPomodoroContext {
  breakLength: number;
  sessionLength: number;
  secondsLeft: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  incrementBreak: () => void;
  decrementBreak: () => void;
  incrementSession: () => void;
  decrementSession: () => void;
}

export const defaultPomodoroContext: IPomodoroContext = {
  breakLength: 5,
  sessionLength: 25,
  secondsLeft: 5 * 25 * 60,
  startTimer: () => {},
  stopTimer: () => {},
  resetTimer: () => {},
  incrementBreak: () => {},
  decrementBreak: () => {},
  incrementSession: () => {},
  decrementSession: () => {}
};

export const PomodoroContext = React.createContext<IPomodoroContext>(
  defaultPomodoroContext
);
