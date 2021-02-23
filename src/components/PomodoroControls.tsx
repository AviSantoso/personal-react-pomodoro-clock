import React from "react";

import { Row, Col, Button, ButtonGroup } from "react-bootstrap";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";

import { usePomodoro } from "../contexts";
import { toMS } from "../helpers";

export const PomodoroControls = () => {
  const {
    secondsLeft,
    startTimer,
    stopTimer,
    resetTimer,
    isCountingDown,
    isBreak
  } = usePomodoro();

  const audioRef = React.useRef<HTMLAudioElement>();

  const { minutes, seconds } = toMS(secondsLeft);

  const startStopTimer = () => {
    if (isCountingDown) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const handleReset = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    resetTimer();
  };

  React.useEffect(() => {
    if (secondsLeft === 0) {
      const audio = audioRef.current;
      if (audio) {
        audio.play();
      }
    }
  }, [secondsLeft]);

  return (
    <Row className="mt-5">
      <Col>
        <Row>
          <Col>
            <h2 id="timer-label">{isBreak ? "Break" : "Session"}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 id="time-left">
              {minutes}:{seconds}
            </h3>
            <audio
              id="beep"
              preload="auto"
              ref={(audio) => (audioRef.current = audio!)}
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ButtonGroup size="lg">
              <Button
                id="start_stop"
                onClick={startStopTimer}
                variant="outline-primary"
                size="lg"
              >
                <PlayCircleOutlineIcon />
                <PauseCircleOutlineOutlinedIcon />
              </Button>
              <Button
                id="reset"
                onClick={handleReset}
                variant="outline-primary"
                size="lg"
              >
                <RefreshOutlinedIcon />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PomodoroControls;
