import IPomodoroContext from "./IPomodoroContext";

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

export default defaultPomodoroContext;
