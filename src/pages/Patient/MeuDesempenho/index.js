import React from 'react';

// react plugin for creating charts
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";

// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GraficoDor from "../../../components/Charts/graficoDor"

import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
import './styles.css';




// import styles from "assets/jss/dashboardStyle.js";

// const useStyles = makeStyles(styles);

export default function MeuDesempenho() {
     
    return (
        <div id="page-cuidadores" className="container"> 
            <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Metas" />
        </div>

        <div className="header-content">
          <strong>Meu Desempenho</strong>
        </div>
      </header>
            <GraficoDor />


            
        </div>

);
}