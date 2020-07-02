import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Controls from "./components/Controls";
import GraphControls from "./components/GraphControls";
import Graph from "./components/Graph";

class App extends React.Component {
  render() {
    return (
      <div className="mainBody">
        <div>
          <NavBar />
          <div className="left-panel">
            <Controls />
            <Controls />
            <GraphControls />
          </div>
        </div>
        <div className="right-panel">
          <Graph id="graph-1" />
          <Graph id="graph-2" />
          <Graph id="graph-3" />
        </div>
      </div>
    );
  }
}

export default App;
