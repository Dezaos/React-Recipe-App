import React from "react";
import { makeStyles } from "@material-ui/core";

interface InformationBoxProps {
  title: string;
  data?: string | undefined;
  unit?: string;
  boxClassName?: string;
  circleClassName?: string;
  dataClassName?: string;
  dataUnitClassName?: string;
  titleClassName?: string;
}

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    width: "fit-content",
    height: 75,
  },
  dataContainer: {
    width: 50,
    height: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid white",
    borderRadius: 25,
    overflow: "hidden",
  },
  data: {
    fontSize: 15,
    lineHeight: "15px",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  dataUnit: {
    fontSize: 8,
    lineHeight: "8px",
    fontWeight: "lighter",
    width: "100%",
    textAlign: "center",
  },
  title: { marginLeft: 10 },
});

const classNameCombine = (valueA: string, valueB?: string) => {
  return valueB ? `${valueA} ${valueB}` : valueA;
};

const InformationBox: React.FC<InformationBoxProps> = ({
  title,
  data,
  unit,
  boxClassName,
  circleClassName,
  dataClassName,
  dataUnitClassName,
  titleClassName,
}) => {
  const classes = useStyles();

  return (
    <div className={classNameCombine(classes.root, boxClassName)}>
      <div className={classNameCombine(classes.dataContainer, circleClassName)}>
        <span className={classNameCombine(classes.data, dataClassName)}>
          {data ? data : "-"}
        </span>
        {unit && data ? (
          <span
            className={classNameCombine(classes.dataUnit, dataUnitClassName)}
          >
            {unit}
          </span>
        ) : null}
      </div>
      <h3 className={classNameCombine(classes.title, titleClassName)}>
        {title}
      </h3>
    </div>
  );
};

export default InformationBox;
