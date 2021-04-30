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
      const { user: { patient_id:{ _id} } } = await AuthService.getCurrentUser()
      const { data: { profissionals } } = await PatientService.returnMyProfissionals({ patient_id: _id })
      const { user: { firstName } } = AuthService.getCurrentUser()
      
      setUserData(firstName);
      setProfissionals(profissionals)
      setPatient_id(_id)
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
      display: 'flex',
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
    const response = await PatientService.insertProfissional({patient_id: patient_id, email: email })

    setProfissionalUpdate(true)
  }



  return (
    <div id="page-cuidadores" className="container">

      <PageHeader name={userData} />
      <main>

        <Button className={classes.botao} align="center" variant="outlined" color="primary" onClick={handleClickOpen}>
          Inserir Código
          </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle className={classes.titulo} id="form-dialog-title"><b>Inserir Código</b></DialogTitle>
          <DialogContent >
            <DialogContentText className={classes.texto}>
              <strong>Adicionar Email do Cuidador para vincular sua conta com o seu profissional de saúde.</strong> <br /> OBS.: Para conseguir o código, entre em contato com o seu médico.
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
   

        <span className="total-connections">
          Produzido por: E-brains Team
                </span>
      </main>

    </div>
  );
}

