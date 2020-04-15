import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "@material-ui/core";
import useFirstUpdateEffect from "../../Hooks/FirstUpdateEffectHook";

interface Props extends CheckboxProps {
  onFunction: () => void;
  offFunction: () => void;
  startValue?: boolean;
  functionOnInit?: boolean;
}

const runCheckFunction = (
  value: boolean,
  onFunction: () => void,
  offFunction: () => void
): void => {
  if (value === true) onFunction();
  else offFunction();
};

const TriggerCheckBox: React.FC<Props> = ({
  onFunction,
  offFunction,
  startValue = false,
  functionOnInit = false,
  ...rest
}) => {
  const [checkValue, setCheckValue] = useState<boolean>(startValue);

  const onCheckValueChange = () =>
    runCheckFunction(checkValue, onFunction, offFunction);

  useFirstUpdateEffect(onCheckValueChange, [checkValue], functionOnInit);

  return (
    <Checkbox
      {...rest}
      checked={checkValue}
      onChange={() => {
        setCheckValue(!checkValue);
      }}
    />
  );
};

export default TriggerCheckBox;
