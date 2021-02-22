import React from "react";

import { Row, Col, Button } from "react-bootstrap";

import {
  PlayCircleOutline,
  PauseCircleOutlineOutlined,
  RefreshOutlined
} from "@material-ui/icons";

import { usePomodoro } from "../contexts";
import { ToHMS } from "../helpers";

export const PomodoroControls = () => {
  const { secondsLeft } = usePomodoro();
  const { hours, minutes, seconds } = ToHMS(secondsLeft);

  return (
    <Row>
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
        <Row>
          <Col>
            <Button>
              <PlayCircleOutline />
            </Button>
            <Button>
              <PauseCircleOutlineOutlined />
            </Button>
            <Button>
              <RefreshOutlined />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PomodoroControls;
