import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import CustomizedTables from './patientTable.js';

import ProfissionalService from '../../../../services/profissional.service';
import AuthService from '../../../../services/auth.service';



const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  table: {
    minWidth: 700,
  },
});

function Content(props) {
  const { classes } = props;


  const [patients, setPatients] = useState([]);
  const [profissional_id, setProfissional_id] = useState();
  const [patientUpdate, setPatientUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      const { user: { _id } } = await AuthService.getCurrentUser()
     
      const { data: { patients } } = await ProfissionalService.returnMyPatients({ profissional_id: _id })
      
      setPatients(patients)
      setProfissional_id(_id)
      setPatientUpdate(false)
    })();

  }, [patientUpdate]);


  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">


            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Adicionar Paciente
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.contentWrapper}> */}
      {/* <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography> */}


      <CustomizedTables props={patients} />

      {/* </div> */}
    </Paper>
  );
} 



export default withStyles(styles)(Content);


