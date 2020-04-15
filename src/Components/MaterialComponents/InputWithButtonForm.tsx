import React, { useState } from "react";
import { Input, InputProps, ButtonProps, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

interface InputWithButtonFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, value: string) => void;
  buttonIcon?: JSX.Element;
  inputProps?: InputProps;
  buttonFormProps?: ButtonProps;
}

const InputWithButtonForm: React.FC<InputWithButtonFormProps> = ({
  onSubmit,
  buttonIcon,
  inputProps,
  buttonFormProps,
}) => {
  const [formValue, setFormValue] = useState("");
  return (
    <form
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
