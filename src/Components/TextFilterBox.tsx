import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Popper,
  MenuList,
  Grow,
  TextField,
  IconButton,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const TextFilterBox: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [values, setValues] = useState<string[]>([]);

  return (
    <div>
      <Button
        ref={anchorRef}
        onClick={() => {
          setOpen(!open);
        }}
      >
        Click Here
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <MenuList>
              {values.map((value) => (
                <MenuItem>{value} </MenuItem>
              ))}
              <MenuItem>
                <TextField />
                <IconButton
                  type="submit"
                  onClick={(event) => {
                    setValues([...values, "Test"]);
                  }}
                >
                  <CheckIcon />
                </IconButton>
              </MenuItem>
            </MenuList>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default TextFilterBox;
