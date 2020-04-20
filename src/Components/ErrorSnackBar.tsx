import React from "react";
import { Snackbar, Card, makeStyles, IconButton } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CloseIcon from "@material-ui/icons/Close";

interface ErrorSnackBarProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const ERROR_DISPLAY_STYLE = "flex";

const useStyles = makeStyles((theme) => ({
  errorBox: {
    display: `${ERROR_DISPLAY_STYLE}`,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
    marginTop: 5,
    padding: "8px 16px",
  },
  errorText: {
    marginLeft: 10,
    color: "white",
  },
  errorIcon: {
    color: "white",
  },
  errorCloseIcon: {
    padding: 5,
  },
}));

const ErrorSnackBar: React.FC<ErrorSnackBarProps> = ({
  message,
  show,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={show}
      autoHideDuration={6000}
      onClose={(event, reason) => {
        if (reason === "clickaway") return;
        onClose();
      }}
    >
      <Card
        className={classes.errorBox}
        style={{ display: show ? ERROR_DISPLAY_STYLE : "none" }}
      >
        <ErrorOutlineIcon className={classes.errorIcon} />
        <strong className={classes.errorText}>{message}</strong>
        <IconButton
          className={classes.errorCloseIcon}
          onClick={() => onClose()}
        >
          <CloseIcon />
        </IconButton>
      </Card>
    </Snackbar>
  );
};

export default ErrorSnackBar;
