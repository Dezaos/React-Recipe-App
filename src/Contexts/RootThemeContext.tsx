import React, { Props, useState } from "react";
import { Theme, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange, blueGrey } from "@material-ui/core/colors";
import useUnload from "../Hooks/UnloadHook";
import useOnceEffect from "../Hooks/OnceEffectHook";

interface RootThemeContextProps {
  theme: Theme;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const DARK_MODE_LOCALSTORAGE_ID = "dark_mode";

const createTheme = (darkMode: boolean) => {
  const blueprint = createMuiTheme({
    palette: {
      primary: blueGrey,
      secondary: orange,
      type: darkMode ? "dark" : "light",
    },
  });

  return darkMode ? createDarkTheme(blueprint) : createWhiteTheme(blueprint);
};

const createWhiteTheme: (themeBlueprint: Theme) => Theme = (themeBlueprint) => {
  return {
    ...themeBlueprint,
    palette: {
      ...themeBlueprint.palette,
      background: { ...themeBlueprint.palette.background, default: "#f0f1eb" },
    },
  };
};

const createDarkTheme: (themeBlueprint: Theme) => Theme = (themeBlueprint) => {
  return {
    ...themeBlueprint,
  };
};

export const RootThemeContext = React.createContext<RootThemeContextProps>({
  theme: createTheme(true),
  darkMode: true,
  setDarkMode: () => {},
});

const getDarkMode = () => {
  let result = true;
  try {
    const darkModeString = localStorage.getItem(DARK_MODE_LOCALSTORAGE_ID);
    if (darkModeString) {
      const storedDarkMode = JSON.parse(darkModeString) as boolean;
      result = storedDarkMode;
    }
  } catch (error) {}

  return result;
};

export const RootThemeProvider = ({ children }: Props<React.FC>) => {
  const [theme, setTheme] = useState(createTheme(true));
  const [darkMode, setDarkMode] = useState(true);
  const [initialzed, setInitialzed] = useState(false);

  const changeTheme: (value: boolean) => void = (value) => {
    setTheme(createTheme(value));
    setDarkMode(value);
  };

  useOnceEffect(() => {
    try {
      const darkModeString = localStorage.getItem(DARK_MODE_LOCALSTORAGE_ID);
      if (darkModeString) {
        const storedDarkMode = JSON.parse(darkModeString) as boolean;
        if (darkMode !== storedDarkMode) changeTheme(storedDarkMode);
      }
    } catch (error) {}
    setInitialzed(true);
  });

  useUnload(() => {
    localStorage.setItem(DARK_MODE_LOCALSTORAGE_ID, String(darkMode));
  });

  return (
    <RootThemeContext.Provider
      value={{
        theme: theme,
        darkMode: darkMode,
        setDarkMode: changeTheme,
      }}
    >
      {initialzed ? (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ) : null}
    </RootThemeContext.Provider>
  );
};
