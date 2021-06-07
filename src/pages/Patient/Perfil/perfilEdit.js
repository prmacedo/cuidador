import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AuthService from "../../../services/auth.service";
import PatientService from "../../../services/patient.service";
import './styles.css'


const medications = [
  {
    name: "Paracetamol",
    dose: "2 mg",
    frequency: 8,
  }

]

const medicationFrequency = [
  {
    frequency: 3,
  },
  {
    frequency: 4,
  },
  {
    frequency: 6,
  },
  {
    frequency: 8,
  },
  {
    frequency: 12,
  },
]

const genderObject = [
  {
    value: "Feminino",
    label: "Feminino",
  },
  {
    value: "Masculino",
    label: "Masculino",
  },
  {
    value: "Não Definido",
    label: "Não Definido",
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
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: "100%",
  },
  selected: {
    width: "100%",
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      width: "100%",
    },
  },
  extendedIcon1: {
    marginTop: "40px",
  },
  extendedIcon2: {
    // marginRight: theme.spacing(1),
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
  const [medicinesList, setMedicinesList] = useState(medications);

  useEffect(() => {
    (async () => {
      const { user } = await AuthService.getCurrentUser()
      setUserData(user.first_name);

      setFirstName(user.first_name)
      setLastName(user.last_name)
      setGender(user.gender)
      setBirth(new Date(user.birth).toLocaleDateString());
      setOccupation((user.occupation === "Não informado") ? "" : user.occupation);
      setState((user.state === "Não informado") ? "" : user.state);
      setCity((user.city === "Não informado") ? "" : user.city);
      setWeight((user.weight === "Não informado") ? "" : user.weight);
      setHeight((user.height === "Não informado") ? "" : user.height);
      setImc((user.imc === "Não informado") ? "" : user.imc);
      setBloodtype((user.blood_type === "Não informado") ? "" : user.blood_type);
      setCondition((user.condition === "Não informado") ? "" : user.condition);

    })();
  }, []);



  const updateData = () => {
    // PatientService.updateMyData({
    //   patient_id,
    //   firstName,
    //   lastName,
    //   gender,
    //   birth,
    //   occupation,
    //   state,
    //   city,
    //   weight,
    //   height,
    //   imc,
    //   bloodtype,
    //   condition,
    // });
  };

  const handleAddMedication = () => {
    const dataStructure = { name: " ", dose: " ", frequency: 0, }
    let newArr = [...medicinesList];
    newArr.push(dataStructure)
    setMedicinesList(newArr)
    // console.log(newArr)
    // console.log(medicinesList)
  };

  const handleDeleteMedication = (index) => {
    let newArr = [...medicinesList];
    newArr.splice(index, 1);
    setMedicinesList(newArr)
    console.log(medicinesList)
  };

  const updateFieldChanged = (index, key) => e => {
    let newArr = [...medicinesList];
    if (key === "frequency") {
      newArr[index][key] = Number(e.target.value);
    } else {
      newArr[index][key] = e.target.value;
    }
    setMedicinesList(newArr);
    console.log(medicinesList)
  }



  return (
    <>
      {userData && (
        <div id="page-edit" className="container">
          <PageHeader name={userData} />
          <main>



            <div className="forms">
              <h1 style={{ width: "100%", textAlign: 'center', marginTop: "2rem" }}>Atualizar Dados</h1>
              <h2 style={{ width: "100%", textAlign: 'center' }}>Informações Pessoais</h2>

              <form action="">
                <div className="input-group">
                  <label htmlFor="Name">Nome</label>
                  <input type="text" name="Name" id="Name" placeholder="Digite seu Nome"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="Surname">Sobrenome</label>
                  <input type="text" name="Surname" id="Surname" placeholder="Digite seu sobrenome"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="gender">Gênero</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    {genderObject.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="birth">Data de Nascimento</label>
                  <input type="date" name="birth" id="birth" placeholder=""
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="Occupation">Ocupação</label>
                  <input type="text" name="Occupation" id="Occupation" placeholder="Qual sua ocupação?"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="state">Estado</label>
                  <input type="text" name="state" id="state" placeholder="Qual estado que você mora?"
                    value={state}
                    onChange={(e) => setState(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="city">Cidade</label>
                  <input type="text" name="city" id="city" placeholder="Qual Cidade você mora?"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                </div>



                <h2 style={{ width: "100%", textAlign: 'center', marginBottom: "2rem" }}>Informações Médicas</h2>



                <div className="input-group">
                  <label htmlFor="goal">Altura</label>
                  <input type="text" name="goal" id="goal" placeholder="Qual a sua altura?"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="goal">Peso</label>
                  <input type="text" name="goal" id="goal" placeholder="Qual seu peso?"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="frequency">Grupo Sanguíneo</label>
                  <select
                    value={bloodtype}
                    onChange={(e) => setBloodtype(e.target.value)}
                  >
                    {bloodTypeObject.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="condition">Condição de Saúde</label>
                  <input type="text" name="condition" id="condition" placeholder="Qual condição de Saúde que causa sua dor Crônica?"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)} />
                </div>

                <div className="input-group">
                  <label htmlFor="condition">Ano do Diagnostico</label>
                  <input type="text" name="condition" id="condition" placeholder="Qual Ano você foi Diagnosticado?"

                  />
                </div>


                <h2 style={{ width: "100%", textAlign: 'center', marginBottom: "2rem" }}>Medicações em uso</h2>


                {medicinesList.map(({ name, dose, frequency }, index) => (
                  <>
                    <div className="medication-header">
                      <h3>Medicação {index + 1}</h3>

                      {index > 0 ? (
                        <Button variant="contained" color="secondary" onClick={() => handleDeleteMedication(index)}>
                          <smal>Delete </smal><CloseIcon />
                        </Button>
                      ) : <Button onClick={handleAddMedication}>
                        <Fab size="small" color="primary" aria-label="add" >
                          <AddIcon />
                        </Fab>
                      </Button>}

                    </div>

                    <div className="input-group">
                      <label htmlFor="condition">Nome</label>
                      <input type="text" name="condition" id="condition" placeholder="Qual condição de Saúde que causa sua dor Crônica?"
                        value={name}
                        onChange={updateFieldChanged(index, 'name')} />
                    </div>

                    <div className="input-group">
                      <label htmlFor="condition">Dose <small>(gramas/nº de comprimidos)</small></label>
                      <input type="text" name="condition" id="condition" placeholder="Qual condição de Saúde que causa sua dor Crônica?"
                        value={dose}
                        onChange={updateFieldChanged(index, 'dose')} />
                    </div>

                    <div className="input-group">
                      <label htmlFor="condition">Frequência</label>
                      <select
                        value={Number(frequency)}
                        onChange={updateFieldChanged(index, 'frequency')}
                      >
                        {medicationFrequency.map(({ frequency }, index) => <option value={frequency} >a cada {frequency} horas</option>)}
                      </select>
                    </div>


                  </>
                ))}


              </form>


            </div>

            <div className="nav-button">
              <NavLink className="send-buttom" to="/Perfil">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"

                  onClick={updateData}
                >
                  Atualizar Dados
            </Button>
              </NavLink>
              <NavLink className="send-buttom" to="/Perfil">
                <Button
                  variant="contained"
                  color="secondary"

                  startIcon={<DeleteIcon />}
                >
                  Cancelar
            </Button>
              </NavLink>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
