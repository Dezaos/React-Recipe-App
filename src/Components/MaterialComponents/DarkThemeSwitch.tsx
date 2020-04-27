import React, { useContext } from "react";
import { RootThemeContext } from "../../Contexts/RootThemeContext";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import TriggerCheckBox from "./TriggerCheckbox";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

const DarkThemeSwitch: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(RootThemeContext);

  return (
    <div>
      <TriggerCheckBox
        icon={<NightsStayOutlinedIcon />}
        checkedIcon={<NightsStayIcon />}
        startValue={darkMode}
        checked={darkMode}
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
