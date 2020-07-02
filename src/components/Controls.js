import React from "react";
import Button from "@material-ui/core/Button";

class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <h2>Controls</h2>
        <Button
          variant="contained"
          // color="primary"
          disableElevation
          style={{ color: "black", backgroundColor: "lightblue" }}
        >
          Simulate
        </Button>
      </div>
    );
  }
}

export default Controls;
