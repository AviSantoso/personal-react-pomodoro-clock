import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { usePomodoro } from "../contexts";

export const SessionControls = () => {
  const { sessionLength, incrementSession, decrementSession } = usePomodoro();

  return (
    <>
      <h2>Session Length</h2>
      <Row>
        <Button variant="outline-primary" size="lg" onClick={decrementSession}>
          <ArrowDownwardIcon />
        </Button>
        <Col>{sessionLength}</Col>
        <Button variant="outline-primary" size="lg" onClick={incrementSession}>
          <ArrowUpwardIcon />
        </Button>
      </Row>
    </>
  );
};

export default SessionControls;
