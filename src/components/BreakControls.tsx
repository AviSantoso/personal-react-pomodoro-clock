import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { usePomodoro } from "../contexts";

export const BreakControls = () => {
  const { breakLength, incrementBreak, decrementBreak } = usePomodoro();

  return (
    <>
      <h2 id="break-label">Break Length</h2>
      <Row>
        <Col>
          <Button
            id="break-decrement"
            onClick={decrementBreak}
            variant="outline-primary"
            size="lg"
          >
            <ArrowDownwardIcon />
          </Button>
        </Col>
        <Col>
          <span id="break-length">{breakLength}</span>
        </Col>
        <Col>
          <Button
            id="break-increment"
            onClick={incrementBreak}
            variant="outline-primary"
            size="lg"
          >
            <ArrowUpwardIcon />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BreakControls;
