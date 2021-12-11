import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import { NavLink } from 'react-router-dom';
import PatientService from '../../../services/patient.service';
import AuthService from '../../../services/auth.service';
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip, Typography, Divider, ListItem, List, Fab, makeStyles } from '@material-ui/core';


const medications = [
  {
    name: "Paracetamol",
    dose: "2",
    frequency: 8,
  },
  {
    name: "Paracetamol",
    dose: "2",
    frequency: 8,
  }

]

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // '  margin: theme.spacing(1),'
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
    height: 70,
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
  const [medicinesList, setMedicinesList] = useState(medications);

  const classes = useStyles();

  useEffect(() => {
    (async () => {

      const { user } = await AuthService.getCurrentUser()
      setUserData(user.firstName);
   



      setFirstName(user.first_name)
      setLastName(user.last_name)
      setGender(user.gender)
      setBirth(new Date(user.birthday).toLocaleDateString());
      setOccupation(user.occupation)
      setState(user.state)
      setCity(user.city)
      setWeight(user.weight)
      setHeight(user.height)
      setImc(user.imc)
      setBloodtype(user.blood_type)
      setCondition(user.condition)


    })();



  }, []);

  return (
    <div id="page-perfil" className="container">
      { firstName &&
        <>
          <PageHeader name={userData} />

          <main >

            <div className="forms" >
              <h2>Informações Pessoais</h2>
              <p>Informações básicas, como seu nome e foto</p>

              <List component="nav" className={classes.divisor} aria-label="mailbox folders">
                <ListItem button className={classes.listItem}>
                  <Typography className="title" gutterBottom variant="h4">Nome:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{firstName}</Typography>
                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem} >
                  <Typography className="title" gutterBottom variant="h4">Sobrenome:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{lastName}</Typography>
                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem} >
                  <Typography className="title" gutterBottom variant="h4">Sexo:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{gender}</Typography>
                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem} >
                  <Typography className="title" gutterBottom variant="h4">Nascimento</Typography>
                  <Typography className="description" gutterBottom variant="h5">{birth}</Typography>
                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem}>
                  <Typography className="title" gutterBottom variant="h4">Ocupação:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{occupation}</Typography>
                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem}>
                  <Typography className="title" gutterBottom variant="h4">Estado:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{state}</Typography>
                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem}>

                  <Typography className="title" gutterBottom variant="h4">Cidade:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{city}</Typography>

                </ListItem>


              </List>
              <h2>Informações Médicas</h2>
              <p  >Informações importantes, como sua altura e condição de saúde</p>
              <List component="nav" className={classes.divisor} aria-label="mailbox folders">


                <ListItem button className={classes.listItem}>

                  <Typography className="title" gutterBottom variant="h4">Peso:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{weight}</Typography>

                </ListItem>
                <Divider light />
                <ListItem button className={classes.listItem}>

                  <Typography className="title" gutterBottom variant="h4">Altura:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{height}</Typography>

                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem}>

                  <Typography className="title" gutterBottom variant="h4">IMC:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{imc}</Typography>


                </ListItem>
                <Divider light />

                <ListItem button className={classes.listItem}>

                  <Typography className="title" gutterBottom variant="h5">Tipo Sanguíneo:</Typography>
                  <Typography className="description" gutterBottom variant="h5">{bloodtype}</Typography>


                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem}>
                  <Tooltip title="Condição de saúde que causa dor Crônica">
                    <Typography className="title" gutterBottom variant="h5">Condição de saúde:</Typography>
                  </Tooltip>
                  <Typography className="description" gutterBottom variant="h5">{condition}</Typography>

                </ListItem>

                <Divider light />

                <ListItem button className={classes.listItem}>

                  <Typography className="title" gutterBottom variant="h5">Ano de Diagnostico:</Typography>
                  <Typography className="description" gutterBottom variant="h5"> Ainda não implementado</Typography>

                </ListItem>
              </List>


              <h2>Medicações em uso</h2>

              <List component="nav" className={classes.divisor} aria-label="mailbox folders">
                <ListItem button className={classes.listItem}>
                  <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h4">Medição</Typography>
                  <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h4">Dosagem</Typography>
                  <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h4">Frequência</Typography>
                </ListItem>



                {medicinesList.map(({ name, dose, frequency }, index) => (
                  <>
                    <Divider light />
                    <ListItem button className={classes.listItem}>
                      <Typography  gutterBottom variant="h5">{name}</Typography>
                      <Typography  gutterBottom variant="h5">{dose}</Typography>
                      <Typography  gutterBottom variant="h5">a cada {frequency} horas</Typography>
                    </ListItem>
                  </>
                ))}









              </List>



            </div>

            <NavLink className="edit" to="/Perfiledit"> <Fab color="primary" aria-label="edit">
              <EditIcon />
            </Fab></NavLink>

          </main>

        </>}
    </div>

  );
}