import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { usePomodoro } from "../contexts";

export const BreakControls = () => {
  const { breakLength, incrementBreak, decrementBreak } = usePomodoro();

  return (
    <>
      <h2>Break Length</h2>
      <Row>
        <Col>
          <Button variant="outline-primary" size="lg" onClick={decrementBreak}>
            <ArrowDownwardIcon />
          </Button>
        </Col>
        <Col>{breakLength}</Col>
        <Col>
          <Button variant="outline-primary" size="lg" onClick={incrementBreak}>
            <ArrowUpwardIcon />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BreakControls;
