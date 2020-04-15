import React, { Props, useState } from "react";
import { createMuiTheme, Theme } from "@material-ui/core/styles";

interface RootThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const RootThemeContext = React.createContext<RootThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const RootThemeProvider = ({ children }: Props<React.FC>) => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <RootThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </RootThemeContext.Provider>
  );
};
