import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    background: "#F8F8FC",
    border: "1px solid #E6E6F0",
    boxSizing: "border-box",
    borderRadius: "4px",
    width: "fit-content",
    height: "32px",
    "&:focus": {
      border: "1px solid #3f51b5",
    },
  },
  inputFocused: {
    border: "1px solid #3f51b5",
  }
}));
