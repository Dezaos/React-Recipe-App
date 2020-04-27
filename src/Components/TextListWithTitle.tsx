import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";

interface TextListWithTitleProps {
  values: string[];
  title?: string;
  titleClassName?: string;
  dense?: boolean;
}

const useStyles = makeStyles({
  title: {
    fontSize: 25,
    paddingBottom: 5,
    margin: 0,
  },
  listItem: {
    padding: 0,
  },
});

const TextListWithTitle: React.FC<TextListWithTitleProps> = ({
  values,
  title,
  titleClassName,
  dense,
}) => {
  const classes = useStyles();

  return (
    <div>
      {title ? (
        <div>
          <p className={titleClassName ? titleClassName : classes.title}>
            {title}
          </p>
          <Divider />
        </div>
      ) : null}
      <List dense={dense}>
        {values.map((value) => (
          <ListItem className={classes.listItem}>
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TextListWithTitle;
