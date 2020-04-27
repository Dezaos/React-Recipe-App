import { makeStyles } from "@material-ui/core";

export const textColor = "white";

const useDetailedRecipeStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    flex: "0 1 700px",
  },
  cardHeader: { backgroundColor: theme.palette.primary.main, color: textColor },
  cardContent: {
    flexGrow: 1,
    alignItems: "stretch",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  textDivider: {
    display: "flex",
    flexDirection: "row",
  },
  media: {
    width: "100%",
    height: 400,
  },
  minorTitle: {
    fontSize: 25,
    paddingBottom: 5,
    margin: 0,
  },
  firstContentContainer: {
    flex: "1 1 50%",
    justifyContent: "center",
    padding: "25px 0 0 25px",
  },
  secondContentContainer: {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    padding: "25px 0 0 25px",
  },
  informationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: textColor,
  },
  informationBox: {
    backgroundColor: theme.palette.primary.main,
    borderRight: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    flex: `1 1 auto`,
    justifyContent: "center",
  },
}));

export default useDetailedRecipeStyles;
