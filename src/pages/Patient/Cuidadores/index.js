import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';


import './styles.css';
import CuidadorList from '../../../components/CuidadorList';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import PageHeader from '../../../components/PageHeader';
import PatientService from '../../../services/patient.service'
import AuthService from '../../../services/auth.service'

export default function Cuidadores() {
  const [open, setOpen] = useState(false);
  const [profissionals, setProfissionals] = useState([]);
  const [patient_id, setPatient_id] = useState();
  const [email, setEmail] = useState();
  const [profissionalUpdate, setProfissionalUpdate] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    (async () => {
      const { user  } = await AuthService.getCurrentUser()
      // const { data: { profissionals } } = await PatientService.returnMyProfissionals({ patient_id: _id })
      
      
      setUserData(user.first_name);
      // setProfissionals(profissionals)
      setPatient_id(user.account_id)
      setProfissionalUpdate(false)
    })();

  }, [profissionalUpdate]);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    botao: {
      // margin: theme.spacing(4),
      display: 'inline',
      fontSize: '15px',
      color: 'var(--color-primary-light)',
      alignContent: 'center',
      background: 'var(--color-box-base)',
      margin: '2.3rem'
    },
    texto: {
      fontSize: '15px',
    },
    titulo: {
      color: 'var(--color-primary-light)',
      fontSize: '20px',

    }
  }));
  const classes = useStyles();

  async function addNewCuidador() {
    const response = await PatientService.insertProfissional({id: patient_id, email: email })

    setProfissionalUpdate(true)
  }



  return (
    <div id="page-cuidador" className="container">

      <main>
      <PageHeader name={userData} />
        <Button className={classes.botao} align="center" variant="outlined" color="primary" onClick={handleClickOpen}>
          Inserir Código
          </Button>


        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle className={classes.titulo} id="form-dialog-title"><b>Inserir Código</b></DialogTitle>
          <DialogContent >
            <DialogContentText className={classes.texto}>
              <strong>Insira o e-mail do profissional de saúde para adicioná-lo aos seus cuidadores.</strong>
              <br />
              Obs: Para obter o e-mail, solicite ao profissional.
              </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="código"
              label="Código"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Voltar
              </Button>
            <Button onClick={addNewCuidador} color="primary">
              Adicionar
              </Button>
          </DialogActions>
        </Dialog>
        {profissionals && profissionals.map(element => (

          <CuidadorList key={element._id} props={element} />
        ))}
   

   
      </main>

    </div>
  );
}

