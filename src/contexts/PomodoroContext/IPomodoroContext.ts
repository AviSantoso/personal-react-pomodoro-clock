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

export default IPomodoroContext;
