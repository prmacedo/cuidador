import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../Dashboard/listItems';
// import Chart from './Chart';
import GridContainer from "../../../components/Grid/GridContainer.js";
import Tasks from "../../../components/Tasks/TasksDoc.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js"
import Cloud from "@material-ui/icons/Cloud";
import {PatientTask} from "../../Patient/Metas/general";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { fade, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import './styles.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  
   
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      roots: {
        minWidth: '275px',
        fontSize: '20px',
      },

  root: {
    display: 'flex',
    fontSize: '12px',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: '48px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
  },},
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,

  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  botao: {
    // margin: theme.spacing(4),
    display: 'flex',
    fontSize: '15px',
    color: 'var(--color-primary-light)',
    alignContent: 'center',
    background: 'var(--color-box-base)',
    // margin: '2.3rem',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  // fixedHeight: {
  //   height: 240,
  // },
   inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

export default function Paciente() {
  const classes = useStyles();

  const [metas, setMetas] = useState('');

  function handleCreateDialog(e) {
      e.preventDefault()
      console.log({
          metas,
      });
  }

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
            
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Paciente
          </Typography>
         
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Card className={classes.roots}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Paciente 01
        </Typography>
        <Typography variant="h4" component="h2">
        <strong>  Nome Sobrenome</strong>
        </Typography>
        <Typography variant="h5" component="p">
            O paciente sofre de dor crônica severa (terceiro grau) na perna esquerda a 7 anos. 
            Vem apresentando melhora desde o último tratamento sob o uso de opioides fortes
            como a morfina e oxicodona. 
        
        </Typography>
      </CardContent>      
    </Card>
    <br></br>
        <GridItem xs={12} sm={12} md={6}>
            <Button  
            onClick={handleClickOpen} 
            className={classes.botao} 
            align="center" 
            variant="outlined" 
            color="primary"> 
            Adicionar Meta
            </Button>
                    <Dialog 
                    className={classes.dialogo} 
                    open={open} 
                    onClose={handleClose} 
                    aria-labelledby="form-dialog-title">
            <form onSubmit={handleCreateDialog}>
          <DialogTitle className={classes.titulo} id="form-dialog-title"><b>Inserir Meta</b></DialogTitle>
          <DialogContent >
            <DialogContentText className={classes.texto}>
              <strong>Adicionar nova meta para o paciente.</strong> <br /> OBS. Uma vez adicionada, a meta ficará refistrada na tabela de atividades até que seja deletada.
              </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="meta"
              label="Meta"
              type="text"
              fullWidth
              value={metas}
            onChange={(e) => { setMetas(e.target.value) }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Voltar
              </Button>
            <Button type= "submit" color="primary">
              Adicionar
              </Button>
          </DialogActions>
          </form>
        </Dialog>
                    <CustomTabs
                        title="Tasks:"
                        headerColor= "info"
                        tabs={[
                            {
                                tabName: "Atividades",
                                tabIcon: Cloud,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={PatientTask}
                                    /> 
                                )
                            }                            
                        ]}
                    />
                </GridItem>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}