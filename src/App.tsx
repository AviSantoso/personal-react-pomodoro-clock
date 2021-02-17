import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";

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
        <Row>
          <Col>
            <h1>Pomodoro Clock</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Break Length</h2>
            <Row>
              <Col>Down</Col>
              <Col>5</Col>
              <Col>Up</Col>
            </Row>
          </Col>
          <Col>
            <h2>Session Length</h2>
            <Row>
              <Col>Down</Col>
              <Col>25</Col>
              <Col>Up</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2>Session</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>25:00</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
