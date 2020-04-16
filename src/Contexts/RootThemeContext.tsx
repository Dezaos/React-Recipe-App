import React, { Props, useState } from "react";
import { Theme, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, deepOrange } from "@material-ui/core/colors";

interface RootThemeContextProps {
  theme: Theme;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const createTheme = (darkMode: boolean) => {
  return createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: blue,
      secondary: deepOrange,
    },
  });
};

export const RootThemeContext = React.createContext<RootThemeContextProps>({
  theme: createTheme(true),
  darkMode: true,
  setDarkMode: () => {},
});

export const RootThemeProvider = ({ children }: Props<React.FC>) => {
  const [theme, setTheme] = useState(createTheme(true));
  const [darkMode, setDarkMode] = useState(true);
  return (
    <RootThemeContext.Provider
      value={{
        theme: theme,
        darkMode: darkMode,
        setDarkMode: (value: boolean) => {
          setTheme(createTheme(value));
          setDarkMode(value);
        },
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RootThemeContext.Provider>
  );
};
