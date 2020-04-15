import React from "react";
import { makeStyles } from "@material-ui/core";
import DarkThemeSwitch from "./MaterialComponents/DarkThemeSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <DarkThemeSwitch />
    </header>
  );
};

export default Header;
