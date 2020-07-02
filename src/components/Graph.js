import React from "react";
import Button from "@material-ui/core/Button";

class Graph extends React.Component {
  render() {
    return (
      <div className="Graph">
        <p>{this.props.id.toUpperCase()}</p>
      </div>
    );
  }
}

export default Graph;
