import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";

export default function Input({ value, onChange }) {
  const classes = useStyles();
  return (
    <input
      className={classes.input}
      classes={{ focused: classes.inputFocused}}
      value={value}
      onChange={onChange}
    />
  );
}
