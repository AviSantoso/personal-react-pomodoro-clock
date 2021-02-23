import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { usePomodoro } from "../contexts";

export const SessionControls = () => {
  const { sessionLength, incrementSession, decrementSession } = usePomodoro();

  return (
    <>
      <h2 id="session-label">Session Length</h2>
      <Row>
        <Button
          id="session-decrement"
          onClick={decrementSession}
          variant="outline-primary"
          size="lg"
        >
          <ArrowDownwardIcon />
        </Button>
        <Col>
          <span id="session-length">{sessionLength}</span>
        </Col>
        <Button
          id="session-increment"
          onClick={incrementSession}
          variant="outline-primary"
          size="lg"
        >
          <ArrowUpwardIcon />
        </Button>
      </Row>
    </>
  );
};

export default SessionControls;
