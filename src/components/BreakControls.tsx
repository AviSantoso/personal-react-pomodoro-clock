import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import { ArrowDownwardIcon, ArrowUpwardIcon } from "@material-ui/core/icons";

import { usePomodoro } from "../contexts";

export const BreakControls = () => {
  const { breakLength } = usePomodoro();

  return (
    <>
      <h2>Break Length</h2>
      <Row>
        <Col>
          <Button>
            <ArrowDownward />
          </Button>
        </Col>
        <Col>{breakLength}</Col>
        <Col>
          <Button>
            <ArrowUpward />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BreakControls;
