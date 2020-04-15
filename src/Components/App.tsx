import React, { useContext } from "react";
import Header from "./Header";
import Body from "./Body";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { RootThemeContext } from "../Contexts/RootThemeContext";
import RecipeApiClient from "../RestApis/RecipeApiClient";

function App() {
  const { theme } = useContext(RootThemeContext);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Body />
      </ThemeProvider>
    </div>
  );
}

export default App;
