import React from "react";
import Header from "./Header";
import Body from "./Body";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Router>
        <Body />
      </Router>
    </div>
  );
}

export default App;
