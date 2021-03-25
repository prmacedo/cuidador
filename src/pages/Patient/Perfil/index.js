import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import { Link, useHistory, NavLink } from 'react-router-dom';
import PatientService from '../../../services/patient.service';
import AuthService from '../../../services/auth.service';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  divisor: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',

  }, formControl: {
    margin: theme.spacing(3),
  },
  check: {
    display: 'flex',
    marginLeft: 30,
  }
}));

export default function Perfil() {
  
  
  

  const [userData, setUserData] = useState();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [birth, setBirth] = useState("")
  const [occupation, setOccupation] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [imc, setImc] = useState("")
  const [bloodtype, setBloodtype] = useState("")
  const [condition, setCondition] = useState("")


  const classes = useStyles();

  useEffect(() => {
    (async () => {

      const { user: { firstName, patient_id: { _id } } } = await AuthService.getCurrentUser()
      setUserData(firstName);
      const myData = await PatientService.getMyData({ patient_id: _id })
     
      if (myData.data) {
        const { data: {
          lastName,
          gender,
          birth,
          occupation,
          state,
          city,
          weight,
          height,
          imc,
          bloodtype,
          condition } } = myData;

        setFirstName(firstName)
        setLastName(lastName)
        setGender(gender)
        setBirth(birth);
        setOccupation(occupation)
        setState(state)
        setCity(city)
        setWeight(weight)
        setHeight(height)
        setImc(imc)
        setBloodtype(bloodtype)
        setCondition(condition)
      }

    })();



  }, []);








  return (


    <div align="center">
      { firstName && <div id="page-cuidadores" className="container">
        <PageHeader name={userData} />

        <div >

          <div className="forms" >
            <h1>Informações Pessoais</h1>
            <p>Informações básicas, como seu nome e foto</p>

            <List component="nav" className={classes.divisor} aria-label="mailbox folders">
              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Nome:</Typography>
                <Typography className="description" gutterBottom variant="body2">{firstName}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem} >

                <Typography gutterBottom variant="h5">Sobrenome:</Typography>
                <Typography className="description" gutterBottom variant="body2">{lastName}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem} >

                <Typography gutterBottom variant="h5">Gênero:</Typography>
                <Typography className="description" gutterBottom variant="body2">{gender}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem} >

                <Typography gutterBottom variant="h5">Idade</Typography>
                <Typography className="description" gutterBottom variant="body2">{birth}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Ocupação:</Typography>
                <Typography className="description" gutterBottom variant="body2">{occupation}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Estado:</Typography>
                <Typography className="description" gutterBottom variant="body2">{state}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Cidade:</Typography>
                <Typography className="description" gutterBottom variant="body2">{city}</Typography>

              </ListItem>

            </List>

            <List component="nav" className={classes.divisor} aria-label="mailbox folders">

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Peso:</Typography>
                <Typography className="description" gutterBottom variant="body2">{weight}</Typography>

              </ListItem>
              <Divider light />
              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Altura:</Typography>
                <Typography className="description" gutterBottom variant="body2">{height}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">IMC:</Typography>


                <Typography className="description" gutterBottom variant="body2">{imc}</Typography>


              </ListItem>
              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Tipo Sanguíneo:</Typography>


                <Typography className="description" gutterBottom variant="body2">{bloodtype}</Typography>


              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Condição de saúde <br></br>que causa dor Crônica:</Typography>
                <Typography className="description" gutterBottom variant="body2">{condition}</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Ano que foi Diagnosticado:</Typography>
                <Typography className="description" gutterBottom variant="body2"> Ainda não implementado</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Medicações em Uso:</Typography>
                <Typography className="description" gutterBottom variant="body2">Ainda não implementado</Typography>

              </ListItem>
            </List>

          </div>

          <NavLink className="edit" to="/Perfiledit"> <Fab color="primary" aria-label="edit">
            <EditIcon />
          </Fab></NavLink>

        </div>

      </div>}
    </div>

  );
}