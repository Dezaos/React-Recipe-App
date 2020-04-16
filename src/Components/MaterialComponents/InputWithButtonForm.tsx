import React, { useState } from "react";
import {
  Input,
  InputProps,
  ButtonProps,
  Button,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

interface InputWithButtonFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, value: string) => void;
  buttonIcon?: JSX.Element;
  inputProps?: InputProps;
  buttonFormProps?: ButtonProps;
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexShrink: 1,
  },
});

const InputWithButtonForm: React.FC<InputWithButtonFormProps> = ({
  onSubmit,
  buttonIcon,
  inputProps,
  buttonFormProps,
}) => {
  const [formValue, setFormValue] = useState("");
  const classes = useStyles();
  return (
    <form
      className={classes.form}
      onSubmit={(event) => {
        onSubmit(event, formValue);
        setFormValue("");
      }}
    >
      <Input
        type="text"
        value={formValue}
        onChange={(event) => setFormValue(event.currentTarget.value)}
        {...inputProps}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="medium"
        style={{ marginLeft: 15 }}
        {...buttonFormProps}
      >
        {buttonIcon ? buttonIcon : <AddIcon />}
      </Button>
    </form>
  );
};

export default InputWithButtonForm;
