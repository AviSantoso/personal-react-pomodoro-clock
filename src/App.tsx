import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";

import { PomodoroControls, BreakControls, SessionControls } from "./components";

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
  return (
    <div className={styles.root}>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Pomodoro Clock</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mx-3">
            <BreakControls />
          </Col>
          <Col className="mx-3">
            <SessionControls />
          </Col>
        </Row>
        <PomodoroControls />
      </Container>
    </div>
  );
}
