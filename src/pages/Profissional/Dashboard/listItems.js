import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Link} from 'react-router-dom';



import ExitToApp from '@material-ui/icons/ExitToApp';


export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/Dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItem>
{/*     
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItem> */}
  
    
    
    <ListItem button  component={Link} to="/">
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ListItemIcon />
      </ListItemIcon>
      <ListItemText primary="Teste 1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListItemIcon />
      </ListItemIcon>
      <ListItemText primary="Teste 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListItemIcon />
      </ListItemIcon>
      <ListItemText primary="Teste 3" />
    </ListItem>
  </div>
);