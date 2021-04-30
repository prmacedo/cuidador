import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(0, 0, 0.5, 0),
      padding: "30px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.palette.text.secondary,
      textAlign: "center",
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    slider: {
      width: 300,
      margin: "35px 0px 50px 0px",
    },
    root: {
      flexGrow: 0,
      width: '100%',
      marginBottom: '16px',
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    chips: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      height: "50px",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
    button: {
      margin: "15px 0px 50px 0px",
    },
    Typography: {
      margin: "10px 0px 30px 0px",
    },
    toggleGroup: {
      background: "#3f51b5",
      width: '80%',
      border: '1px solid #3f51b5',
    },
    toggle: {
      width: '50%',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 600,
    },
    toggleSelected: {
      background: '#ffffff !important',
    },
    divider: {
        width: '80%',
    },
    painBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '21.18px',
        marginBottom: '13px',
    },
  }))
;
