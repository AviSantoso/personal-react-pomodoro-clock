import React from "react";

import { Row, Col, Button, ButtonGroup } from "react-bootstrap";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";

import { usePomodoro } from "../contexts";
import { toMS } from "../helpers";

export const PomodoroControls = () => {
  const [started, setStarted] = React.useState(false);
  const {
    secondsLeft,
    startTimer,
    stopTimer,
    resetTimer,
    isBreak
  } = usePomodoro();
  const { minutes, seconds } = toMS(secondsLeft);

  const startStopTimer = () => {
    if (started) {
      stopTimer();
    } else {
      startTimer();
    }
    setStarted((p) => !p);
  };

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
              {/* {hours}:{minutes}:{seconds} */}
              {minutes}:{seconds}
            </h3>
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
              {/* <Button onClick={stopTimer} variant="outline-primary" size="lg">
                <PauseCircleOutlineOutlinedIcon />
              </Button> */}
              <Button
                id="reset"
                onClick={resetTimer}
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
