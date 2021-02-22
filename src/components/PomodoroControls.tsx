import React from "react";

import { Row, Col, Button, ButtonGroup } from "react-bootstrap";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";

import { usePomodoro } from "../contexts";
import { ToHMS } from "../helpers";

export const PomodoroControls = () => {
  const { secondsLeft, startTimer, stopTimer, resetTimer } = usePomodoro();
  const { hours, minutes, seconds } = ToHMS(secondsLeft);

  return (
    <Row className="mt-5">
      <Col>
        <Row>
          <Col>
            <h2>Session</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              {hours}:{minutes}:{seconds}
            </h3>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ButtonGroup size="lg">
              <Button variant="outline-primary" size="lg" onClick={startTimer}>
                <PlayCircleOutlineIcon />
              </Button>
              <Button variant="outline-primary" size="lg" onClick={stopTimer}>
                <PauseCircleOutlineOutlinedIcon />
              </Button>
              <Button variant="outline-primary" size="lg" onClick={resetTimer}>
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
