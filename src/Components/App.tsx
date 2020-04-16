import React from "react";
import Header from "./Header";
import Body from "./Body";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Body />
    </div>
  );
}

export default App;
