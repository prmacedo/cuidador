import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import InputMask from "react-input-mask";
import Button from "@material-ui/core/Button";

import AuthService from "../../../services/auth.service";
import PatientService from "../../../services/patient.service";

const genderObject = [
  {
    value: "Feminino",
    label: "Feminino",
  },
  {
    value: "Masculino",
    label: "Masculino",
  },
];
const bloodTypeObject = [
  {
    value: "O+",
    label: "O+",
  },
  {
    value: "O-",
    label: "O-",
  },
  {
    value: "A+",
    label: "A+",
  },
  {
    value: "A-",
    label: "A-",
  },
  {
    value: "B+",
    label: "B+",
  },
  {
    value: "B-",
    label: "B-",
  },
  {
    value: "AB+",
    label: "AB+",
  },
  {
    value: "AB-",
    label: "AB-",
  },
  {
    value: "Não Sabe",
    label: "Não Sabe",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "40ch",
  },
  selected: {
    width: "40ch",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  extendedIcon1: {
    marginTop: "40px",
  },
  extendedIcon2: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function PerfilEdit() {
  const [userData, setUserData] = useState();
  const [patient_id, setPatient_id] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [occupation, setOccupation] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState("");
  const [bloodtype, setBloodtype] = useState("");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    (async () => {
      const {
        user: {
          firstName,
          patient_id: { _id },
        },
      } = await AuthService.getCurrentUser();
      setUserData(firstName);
      setPatient_id(_id);
      const myData = await PatientService.getMyData({ patient_id: _id });

      if (myData.data) {
        const {
          data: {
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
            condition,
          },
        } = myData;

        setFirstName(firstName);
        setLastName(lastName);
        setGender(gender);
        setBirth(birth || new window.Date());
        setOccupation(occupation);
        setState(state);
        setCity(city);
        setWeight(weight);
        setHeight(height);
        setImc(imc);
        setBloodtype(bloodtype);
        setCondition(condition);
      }
    })();
  }, []);

  const updateData = () => {
    PatientService.updateMyData({
      patient_id,
      firstName,
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
      condition,
    });
  };

  const handleDateChange = (date) => {
    setBirth(date);
  };

  const classes = useStyles();

  return (
    <div align="center">
      {userData && (
        <div id="page-cuidadores" className="container">
          <PageHeader name={userData} />

          <div>
            <div className="forms">
              <h1>Informações Pessoais</h1>
              <TextField
                label="Nome"
                id="margin-none"
                placeholder="Digite seu primeiro nome"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                label="Sobrenome"
                id="margin-dense"
                placeholder="Digite seu sobrenome"
                className={classes.textField}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                margin="normal"
              />
              <form className={classes.selected} noValidate autoComplete="off">
                <div>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Gênero"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    {genderObject.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </form>

              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Data do Nascimento"
                  format="dd/MM/yyyy"
                  value={birth}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

              </Grid>
            </MuiPickersUtilsProvider> */}

              <MuiThemeProvider>
                <InputMask
                  mask="00/00/0000"
                  value={birth}
                  disabled={false}
                  maskChar=" "
                className={classes.textField}

                >
                  {() => <TextField />}
                </InputMask>
              </MuiThemeProvider>

              <TextField
                label="Ocupação"
                id="margin-normal"
                placeholder="Digite sua ocupação"
                className={classes.textField}
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Estado"
                id="margin-normal"
                placeholder="Digite o estado que você mora: "
                className={classes.textField}
                value={state}
                onChange={(e) => setState(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Cidade"
                id="margin-none"
                placeholder="Digite a cidade onde você mora: "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                label="Peso"
                id="margin-dense"
                placeholder="Digite seu peso"
                className={classes.textField}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Altura"
                id="margin-dense"
                placeholder="Digite sua altura "
                className={classes.textField}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                margin="normal"
              />
              {/* <TextField
              label="IMC"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            /> */}
              <form className={classes.selected} noValidate autoComplete="off">
                <div>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Tipo Sanguíneo"
                    value={bloodtype}
                    onChange={(e) => setBloodtype(e.target.value)}
                  >
                    {bloodTypeObject.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </form>
              <TextField
                label="Condição de saúde"
                id="margin-dense"
                placeholder="Digite sua condição de saúde relacionada com a dor crônica "
                className={classes.textField}
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Ano que foi Diagnosticado"
                id="margin-dense"
                placeholder="Não implementado "
                className={classes.textField}
                margin="normal"
              />
              <TextField
                label="Medicações em Uso"
                id="margin-dense"
                placeholder="Não implementado "
                className={classes.textField}
                margin="normal"
              />
            </div>
          </div>
          <NavLink className="send-buttom" to="/Perfil">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={updateData}
            >
              Atualizar Dados
            </Button>
          </NavLink>
          <NavLink className="send-buttom" to="/Perfil">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Cancelar
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
