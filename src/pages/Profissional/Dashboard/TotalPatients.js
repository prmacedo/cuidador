import React, { useState} from 'react';
import Link from '@material-ui/core/Link';
// import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import api from '../../../services/api';



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalPatients() {


  // const history = useHistory();

  const [email, setEmail] = useState('');

  function handleCreateForm(e) {
      e.preventDefault()

  
  console.log({
      email,
  });


  }
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};




  return (
    <React.Fragment>
      <Title>Total de Pacientes</Title>
      <Typography component="p" variant="h4">
        16
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Dia 3 de Setembro, 2020
      </Typography>
      <br/>
      <div>
        <Link color="primary" href="#" onClick={handleClickOpen}>
         <strong> Adicionar Paciente</strong>
        </Link>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
          <form onSubmit={handleCreateForm}>

         
          <DialogTitle className={classes.titulo} id="form-dialog-title"><b>Inserir Código</b></DialogTitle>
          <DialogContent >
            <DialogContentText className={classes.texto}>
              <strong>Adicione email para vincular sua conta com a do paciente.</strong> <br /> 
              </DialogContentText>
            <input
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              input/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Voltar
              </Button>
            <Button type="submit" color="primary">
              Adicionar
              </Button>
          </DialogActions>
          </form>
        </Dialog>
      </div>
    </React.Fragment>
  );
}