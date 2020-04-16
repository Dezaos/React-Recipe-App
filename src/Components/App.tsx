import React, { useContext } from "react";
import Header from "./Header";
import Body from "./Body";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { RootThemeContext } from "../Contexts/RootThemeContext";
import RecipeApiClient from "../RestApis/RecipeApiClient";

function App() {
  const { theme } = useContext(RootThemeContext);
  console.log(theme.palette.secondary.main);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Body />
    </div>
  );
}

export default App;
