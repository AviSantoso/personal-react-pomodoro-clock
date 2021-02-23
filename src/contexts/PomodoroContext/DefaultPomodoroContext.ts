import IPomodoroContext from "./IPomodoroContext";

const DEFAULT_BREAK_LENGTH = 5;
const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_RUNNING = false;

export const DEFAULT_POMODORO_CONTEXT: IPomodoroContext = {
  breakLength: DEFAULT_BREAK_LENGTH,
  sessionLength: DEFAULT_SESSION_LENGTH,
  secondsLeft: 60 * DEFAULT_SESSION_LENGTH,
  running: DEFAULT_RUNNING,
  startTimer: () => {},
  stopTimer: () => {},
  resetTimer: () => {},
  incrementBreak: () => {},
  decrementBreak: () => {},
  incrementSession: () => {},
  decrementSession: () => {}
};

Object.freeze(DEFAULT_POMODORO_CONTEXT);

export default DEFAULT_POMODORO_CONTEXT;
