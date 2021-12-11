import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
import profilePic from '../../../assets/images/icons/profile-user.svg';

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
import api_url from '../../../services/api';

export default function Cuidadores() {
  const [open, setOpen] = useState(false);
  const [patient_id, setPatient_id] = useState();
  const [email, setEmail] = useState();
  const [profissionalUpdate, setProfissionalUpdate] = useState(false);
  const [userData, setUserData] = useState();

  const [professionals, setProfessionals] = useState([{}]);

  const user = JSON.parse(localStorage.getItem("user"))?.user;
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const headers = { authorization: `Bearer ${token}` }

  async function getProfessionals() {
    const { data } = await api_url.get(`/patient/${user.id}/professionals`, { headers });
    console.log(data);
    setProfessionals(data);
  }

  useEffect(() => {
    getProfessionals();
  }, []);

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
        <div className="professional-card-container">
        {professionals.map(professional => (   
          <div className="professional-card">
            {console.log(professional)}       
            <div className="professional-card-header">
              <img src={ profilePic } alt="" />
              <h3>Dr {`${professional?.professional?.first_name} ${professional?.professional?.last_name}`}</h3>
            </div>
            
            <div className="professional-card-info">
              <p>CRM: {professional?.professional?.crm}</p>
              <p>Profissão: {professional?.professional?.profissao}</p>
              <p>Especialidade: {professional?.professional?.specialization}</p>
            </div>

            <hr />

            <div className="professional-card-contact">
              <div>
                {/* <img src="" alt="" /> */}
                <h3>Contato</h3>
              </div>
              <p>{professional?.professional?.telefone}</p>
              <p>{professional?.professional?.email}</p>
            </div>

            <div className="professional-card-places">
              <div>
                {/* <img src="" alt="" /> */}
                <h3>Locais de atendimento</h3>
              </div>
              <p>{professional?.professional?.service_locations}</p>
            </div>
          </div>
        ))}
        </div>

   
      </main>

    </div>
  );
}

