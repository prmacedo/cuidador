import React from "react";
import { useStyles } from "./styles";

export default function Input({ value, onChange }) {
  const classes = useStyles();
  return <input className={classes.input} value={value} onChange={onChange} />;
}
