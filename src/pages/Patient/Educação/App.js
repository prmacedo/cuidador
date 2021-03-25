import React, { useState, useEffect } from 'react';

import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PatientService from '../../../services/patient.service'
import AuthService from '../../../services/auth.service'
import { NewReleasesOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}));

export default function App() {
  const classes = useStyles();


  const [news, setNews] = useState([]);



  useEffect(() => {
    (async () => {
      
      const  { data }  = await PatientService.getNews()
     

      setNews(data)

    })();

  }, []);
  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '10vh' }} />
      </Container>


      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
      >

        {news && news.map(element => (
          <Grid item xs={12} sm={6} md={4}>
            <Card key={element._id} props={element} />
          </Grid>

        ))}

      </Grid>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '25vh' }} />
      </Container>
    </React.Fragment>
  );
}