import React from "react";
import Header from "./Header";
import Body from "./Body";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { RootThemeProvider } from "../Contexts/RootThemeContext";

function App() {
  return (
    <div className="App">
      <RootThemeProvider>
        <CssBaseline />
        <Header />
        <Router>
          <Body />
        </Router>
      </RootThemeProvider>
    </div>
  );
}

export default App;
