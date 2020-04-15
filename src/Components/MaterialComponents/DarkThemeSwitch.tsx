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
      type: darkmode ? "dark" : "light"
    }
  });
};

const DarkThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useContext(RootThemeContext);
  const startValue = useRef(theme.palette.type === "dark");

  return (
    <div>
      <TriggerCheckBox
        icon={<NightsStayOutlinedIcon />}
        checkedIcon={<NightsStayIcon />}
        startValue={startValue.current}
        onFunction={() => {
          setTheme(createTypeTheme(true, theme));
        }}
        offFunction={() => {
          setTheme(createTypeTheme(false, theme));
        }}
      />
    </div>
  );
};

export default DarkThemeSwitch;
