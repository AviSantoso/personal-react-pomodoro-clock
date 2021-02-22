import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import { usePomodoro } from "./contexts";
import { PomodoroControls, BreakControls } from "./components";

import "./flatly.bootstrap.min.css";
import "./global.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  }
}));

export default function App() {
  const styles = useStyles();
  const { sessionLength } = usePomodoro();
  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col>
            <h1>Pomodoro Clock</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <BreakControls />
          </Col>
          <Col>
            <h2>Session Length</h2>
            <Row>
              <Button>
                <ArrowDownward />
              </Button>
              <Col>{sessionLength}</Col>
              <Button>
                <ArrowUpward />
              </Button>
            </Row>
          </Col>
        </Row>
        <PomodoroControls />
      </Container>
    </div>
  );
}
