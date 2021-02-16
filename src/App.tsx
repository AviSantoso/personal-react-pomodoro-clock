import React from "react";
import { makeStyles } from "@material-ui/styles";

import "./global.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

export default function App() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
