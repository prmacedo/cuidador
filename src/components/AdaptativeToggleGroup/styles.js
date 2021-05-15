import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '500px',
  },
  toggleMarginGroup: {
    display: 'inline-flex',
    marginTop: '12px',
    marginBottom: '16px',
    '& > button': {
      margin: '8px',
    }
  },
  toggleGroup: {
    display: 'inline-flex',
    marginTop: '12px',
    marginBottom: '16px',
  },
  button: {
    '& > button': {
      margin: '8px',
    }
  },
  toggle: {
    height: '32px',
    width: '48px',
    border: '1px solid #E6E6F0',
    background: '#ffffff',
    borderRadius: '4px',
    fontSize: '12px',
  },
  toggleSelected: {
    backgroundColor: '#547DE2 !important',
    border: '1px solid #3D55CC',
    color: '#FFFFFF !important',
    fontSize: '12px',
    fontWeight: 600,
  },
  infoContainer: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 8px',
    marginBottom: '16px',
  },
  typography: {
    color: '#828282',
  }
}));
