import React, { useState, useEffect, useContext } from 'react';
import App from "./App";

import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
import AuthService from '../../../services/auth.service'
import PageHeader from '../../../components/PageHeader';


export default function Educação() {


  const [userData, setUserData] = useState();


  useEffect(() => {
    (async () => {
      const { user: { firstName } } = AuthService.getCurrentUser()
      setUserData(firstName);

    })();
  }, []);

  return (
    <div id="page-cuidadores" className="container">
      {/* <PageHeader/> */}
      <PageHeader name={userData} />


      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </div>

  );
}