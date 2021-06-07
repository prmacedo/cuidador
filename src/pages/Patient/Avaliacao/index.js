import React, { useState, useEffect, useContext } from "react";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../../assets/images/logoAppWhite.svg";
import backIcon from "../../../assets/images/icons/back.svg";
import imagemCorpo from "../../../assets/images/Corpo_numerado.png";
import PageHeader from '../../../components/PageHeader';
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./styles.css";
import AuthService from "../../../services/auth.service";
import PatientService from "../../../services/patient.service";
import Input from "../../../components/Input";
import AdaptativeToggleGroup from "../../../components/AdaptativeToggleGroup";
import { useStyles } from "./styles";

import { LoopCircleLoading } from 'react-loadingg';

function valuetext(value) {
  return `${value}°C`;
}

export default function Avaliação() {
  const classes = useStyles();
  const initialArray = [];
  const history = useHistory();
  const [text, setText] = useState("");
  const [text2, setText2] = useState(0);
  const [pain, setPain] = useState(0);
  const [painLocation, setPainLocation] = useState(initialArray);
  const [worstPain, setWorstPain] = useState(0);
  const [painAverage, setPainAverage] = useState(0);
  const [moodInfluence, setMoodInfluence] = useState(0);
  const [habitualActivities, setHabitualActivities] = useState(0);
  const [influenceRelationship, setInfluenceRelationship] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [sexBehavior, setSexBehavior] = useState(0);
  const [selfEsteem, setSelfEsteem] = useState(0);
  const [anguish, setAnguish] = useState(0);
  const [anxious, setAnxious] = useState(0);
  const [userData, setUserData] = useState();
  const [patient_id, setPatient_id] = useState();
  const [patientdata_id, setPatientData] = useState();
  const [avaliacaoDone, setAvaliacaoDone] = useState(false);
  const [okToRender, setOkToRender] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { user: { first_name, account_id, patientdata }, } = AuthService.getCurrentUser();

    setUserData(first_name);
    setPatient_id(account_id);
    setPatientData(patientdata);
    

    // const avaliacao = await PatientService.getAvaliacaoDiaria({ account_id });

    // if (avaliacao.data[0]) {
    //   setAvaliacaoDone(true);
    //   const {
    //     pain,
    //     painLocation,
    //     worstPain,
    //     painAverage,
    //     moodInfluence,
    //     habitualActivities,
    //     influenceRelationship,
    //     sleep,
    //     sexBehavior,
    //     selfEsteem,
    //     anguish,
    //     anxious,
    //   } = avaliacao.data[0];
    //   setPain(pain);
    //   setPainLocation(painLocation);
    //   setWorstPain(worstPain);
    //   setPainAverage(painAverage);
    //   setMoodInfluence(moodInfluence);
    //   setHabitualActivities(habitualActivities);
    //   setInfluenceRelationship(influenceRelationship);
    //   setSleep(sleep);
    //   setSexBehavior(sexBehavior);
    //   setSelfEsteem(selfEsteem);
    //   setAnguish(anguish);
    //   setAnxious(anxious);
    // }
    setOkToRender(true);
  }

  const sendAssessement = () => {
    setIsPageLoading(true)
    try{
      PatientService.novaAvaliacaoDiaria({
        patient_id: patient_id,
        question_01: pain == "0"? false: true, //Question 01
        question_02: `[${painLocation}]`, //Question 0
        question_03: Number(worstPain), //Question 03
        question_04: Number(painAverage), //Question 04
        question_05: Number(moodInfluence),
        question_06: Number(habitualActivities), //Question 05
        question_07: Number(influenceRelationship), //Question 07
        question_08: Number(sleep), //Question 08
        question_09: Number(sexBehavior),
        question_10: Number(selfEsteem), //Question 09
        question_11: Number(anguish), //Question 11
        // question_12: Number(anxious), //Criar coluna dose
      });
    }
    catch(erro){
      console.log(erro)
      setIsPageLoading(false)
    }

    setAvaliacaoDone(true);
    history.push("/appmenu");

    // console.log({
    //   patient_id: patient_id,
    //   question_01: pain == "0"? false: true, //Question 01
    //   question_02: `[${painLocation}]`, //Question 0
    //   question_03: Number(worstPain), //Question 03
    //   question_04: Number(painAverage), //Question 04
    //   question_05: Number(moodInfluence),
    //   question_06: Number(habitualActivities), //Question 05
    //   question_07: Number(influenceRelationship), //Question 07
    //   question_08: Number(sleep), //Question 08
    //   question_09: Number(sexBehavior),
    //   question_10: Number(selfEsteem), //Question 09
    //   question_11: Number(anguish), //Question 11
    //   // question_12: Number(anxious), //Criar coluna dose
    // })
  };

  const updateAssessement = () => {
    PatientService.updateAvaliacaoDiaria({
      patient_id,
      patientdata_id,
      pain, //Question 01
      painLocation, //Question 0
      worstPain, //Question 03
      painAverage, //Question 04
      moodInfluence,
      habitualActivities, //Question 05
      influenceRelationship, //Question 07
      sleep, //Question 08
      sexBehavior,
      selfEsteem, //Question 09
      anguish, //Question 11
      anxious, //Question 12
    });
    history.push("/appmenu");
  };
  // const handleDelete = index => {
  //   const arrayChips = [...painLocation];
  //   arrayChips.splice(index, 1);
  //   setPainLocation(arrayChips);
  // };

  const avaliationAlreadyDone = (
    <Fab
      onClick={sendAssessement}
      variant="extended"
      color="primary"
      aria-label="add"
      className={classes.margin}
    >
      <NavigationIcon className={classes.extendedIcon} />
      Enviar Avaliação
    </Fab>
  );

  const avaliationDidntDone = (
    <Fab
      onClick={updateAssessement}
      variant="extended"
      color="primary"
      aria-label="add"
      className={classes.margin}
    >
      <NavigationIcon className={classes.extendedIcon} />
      update Avaliação
    </Fab>
  );

  return (
    <div id="page-avaliacao" >
      {okToRender && (
        <>
          <PageHeader name={userData} />

          <main>
            <Typography component="h4" variant="h3" align="center">
              Avaliação Diária
            </Typography>
            <Box style={{ marginTop: "16px" }}>
              <Typography component="span" variant="h4" align="center">
                Você sentiu dor nas últimas 24 horas?
              </Typography>
            </Box>
            <div className="button-group">
              <ToggleButtonGroup
                value={pain}
                exclusive
                onChange={(event, selectedPain) => setPain(selectedPain)}
                aria-label="text alignment"
                className={classes.toggleGroup}
              >
                <ToggleButton
                  value="1"
                  aria-label="left aligned"
                  className={classes.toggle}
                  classes={{ selected: classes.toggleSelected }}
                >
                  Sim
                </ToggleButton>
                <ToggleButton
                  value="0"
                  aria-label="centered"
                  className={classes.toggle}
                  classes={{ selected: classes.toggleSelected }}
                >
                  Não
                </ToggleButton>
              </ToggleButtonGroup>
            </div>



            <Box className={'boxContainer'}>
              <Typography component="span" variant="h4" align="center">

              </Typography>
              <Typography component="span" variant="h4" align="center">
                Utilize a imagem abaixo para responder às perguntas
              </Typography>
              <div>
                <img src={imagemCorpo} className={'imagem-corpo'} />
              </div>
              <Typography omponent="h2" variant="h">
                Onde está localizada a(s) sua(s) dor(es)?
              </Typography>

              <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.container}>
                  <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    <Button
                      style={{ height: 30 }}
                      onClick={() => {
                        setPainLocation((painLocation) => [
                          ...painLocation,
                          Number(text),
                        ]);
                        setText("");
                      }}
                      disabled={text === ""}
                    >
                      Inserir
                    </Button>
                  </ButtonGroup>
                </div>
                <div className={classes.chips}>
                  {painLocation.map((element, index) => (
                    <Chip
                      key={index}
                      size="small"
                      label={element}
                      // value={painLocation}
                      onDelete={(index) => {
                        const arrayChips = [...painLocation];
                        arrayChips.splice(index, 1);
                        setPainLocation(arrayChips);
                      }}
                      color="primary"
                    />
                  ))}
                </div>
              </form>

              <Divider className={classes.divider} />

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography
                  className={classes.Typography}
                  component="span"
                  variant="h4"
                  align="center"
                >
                  Onde está a dor que mais te incomoda?
                </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                  <AdaptativeToggleGroup
                    choicedPain={painLocation}
                    setPain={setText2}
                    value={text2}
                    dynamic={true}
                  />
                </form>
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography
                  className={classes.Typography}
                  component="span"
                  variant="h4"
                  align="center"
                >
                  Qual é a média de intensidade desta dor nas últimas 24hs?
                </Typography>
                <AdaptativeToggleGroup
                  setPain={setPainAverage}
                  value={painAverage}
                  goodFeelings="Sem dor"
                  badFeelings="Pior dor"
                />
              </div>

              <Divider className={classes.divider} />

              <Typography
                className={classes.Typography}
                component="span"
                variant="h4"
                align="center"
              >
                Nas últimas 24 horas
              </Typography>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  Quanto a dor está influenciando no seu humor?
                </Typography>
                <AdaptativeToggleGroup
                  value={moodInfluence}
                  setPain={setMoodInfluence}
                />
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  Quanto a dor está atrapalhando no seu desempenho nas
                  atividades diárias?
                </Typography>

                <AdaptativeToggleGroup
                  value={habitualActivities}
                  setPain={setHabitualActivities}
                  goodFeelings="Não interferiu"
                  badFeelings="Interferiu completamente"
                />
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  Quanto a dor que você está sentindo tem influenciado a sua
                  relação com as outras pessoas?
                </Typography>

                <AdaptativeToggleGroup
                  value={influenceRelationship}
                  setPain={setInfluenceRelationship}
                  goodFeelings="Não interferiu"
                  badFeelings="Interferiu completamente"
                />
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="justify">
                  Quanto o seu sono está sendo prejudicado pela dor?
                </Typography>
                <AdaptativeToggleGroup
                  value={sleep}
                  setPain={setSleep}
                  goodFeelings="Não interferiu"
                  badFeelings="Interferiu completamente"
                />
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  Quanto a dor está influenciando o seu comportamento sexual?
                </Typography>

                <AdaptativeToggleGroup
                  value={sexBehavior}
                  setPain={setSexBehavior}
                  goodFeelings="Não interferiu"
                  badFeelings="Interferiu completamente"
                />
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  A dor está afetando a sua autoestima?
                </Typography>
                <AdaptativeToggleGroup
                  value={selfEsteem}
                  setPain={setSelfEsteem}
                  goodFeelings="Não afeta"
                  badFeelings="Afeta completamente"
                />
              </div>

              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  Quanto a dor tem influenciado o seu trabalho?
                </Typography>

                <AdaptativeToggleGroup
                  value={anguish}
                  setPain={setAnguish}
                  goodFeelings="Não interferiu"
                  badFeelings="Interferiu completamente"
                />
              </div>


              <div
                style={{ width: "100%", maxWidth: "500px", padding: "0 8px" }}
              >
                <Typography component="span" variant="h4" align="center">
                  Quanto a dor tem interferido em sua disposição para andar?
                </Typography>

                <AdaptativeToggleGroup
                  value={anxious}
                  setPain={setAnxious}
                  goodFeelings="Não interferiu"
                  badFeelings="Interferiu completamente"
                />
              </div>
            </Box>
            <div className="send-assessment-button">
                      
              {avaliacaoDone ? avaliationDidntDone : avaliationAlreadyDone}
            </div>
            {isPageLoading? <LoopCircleLoading size='small' color='#003d75'/>:<div></div>}
          </main>
        </>
      )}
    </div>
  );
}
