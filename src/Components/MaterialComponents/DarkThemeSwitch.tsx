import React, { useContext, useRef } from "react";
import { Theme, createMuiTheme } from "@material-ui/core";
import { RootThemeContext } from "../../Contexts/RootThemeContext";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import TriggerCheckBox from "./TriggerCheckbox";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

const createTypeTheme = (darkmode: boolean, oldTheme: Theme): Theme => {
  return createMuiTheme({
    ...oldTheme,
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });
};

const DarkThemeSwitch: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(RootThemeContext);

  return (
    <div>
      <TriggerCheckBox
        icon={<NightsStayOutlinedIcon />}
        checkedIcon={<NightsStayIcon />}
        startValue={darkMode}
        onFunction={() => {
          setDarkMode(true);
        }}
        offFunction={() => {
          setDarkMode(false);
        }}
      />
    </div>
  );
};

export default DarkThemeSwitch;
