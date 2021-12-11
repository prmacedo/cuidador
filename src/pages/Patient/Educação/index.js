import React, { useState, useEffect, useContext } from 'react';
import App from "./App";
import PatientService from '../../../services/patient.service'

import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
import AuthService from '../../../services/auth.service'
import PageHeader from '../../../components/PageHeader';
import Card from "./Card";
import { Grid } from "@material-ui/core";
import './style.css';

import articles from './articles';

export default function Educação() {


  // const [userData, setUserData] = useState();
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { user: { firstName } } = AuthService.getCurrentUser()
  //     const { data } = await PatientService.getNews()
  //     setNews(data)
  //     setUserData(firstName);

  //   })();
  // }, []);

  return (
    <div id="page-cuidadores" className="container">
      <PageHeader/>
      {/* <PageHeader name={userData} /> */}


      <div className="card-container">
        <div className="card-box ">
          {
            articles.map((element, index) => (
              <Card key={index} props={element} />
            ))
          }
          {/* {news && news.map(element => (
       
              <Card key={element._id} props={element} />
            

          ))} */}

        </div>
      </div>
    </div>

  );
}