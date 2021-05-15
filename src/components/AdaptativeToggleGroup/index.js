import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

export default function AdaptativeToggleGroup({
  choicedPain = [],
  setPain,
  value,
  dynamic = false,
  goodFeelings,
  badFeelings,
}) {
  const classes = useStyles();
  const optionsArray = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];


  const dynamicToggle = (
    <>
      <ToggleButtonGroup
        variant="contained"
        value={value}
        color="primary"
        classes={{root: classes.root}}
        className={[classes.toggleGroup, dynamic && classes.button].join(" ") }
        onChange={(event, selectedPain) => setPain(selectedPain)}
        exclusive
      >
        {choicedPain?.map((pain, index) => (
          <ToggleButton
            value={pain}
            className={classes.toggle}
            classes={{ selected: classes.toggleSelected }}
            key={index}
          >
            {pain}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );

  const toggle = (
    <>
      <ToggleButtonGroup
        variant="contained"
        value={value}
        color="primary"
        classes={{root: classes.root}}
        className={classes.toggleGroup}
        onChange={(event, selectedPain) => setPain(selectedPain)}
        exclusive
      >
        {optionsArray.map((pain, index) => (
          <ToggleButton
            value={pain.value}
            className={classes.toggle}
            classes={{ selected: classes.toggleSelected }}
            key={index}
            exclusive
          >
            {pain.value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <div className={classes.infoContainer}>
        <Typography variant="subtitle2" className={classes.typography}>{goodFeelings}</Typography>
        <Typography variant="subtitle2" className={classes.typography}>{badFeelings}</Typography>
      </div>
    </>
  );

  if (dynamic) {
    return dynamicToggle;
  } else {
    return toggle;
  }
}
