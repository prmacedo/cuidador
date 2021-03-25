import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import {Link} from 'react-router-dom';
import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },

});

function createData(name) {
  return {
    name,
    history: [
      { text: 'Breve descrição do exercicio', },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography gutterBottom component="div">
                INFORMAÇÃO
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.text}</TableCell>
                    </TableRow>
                  ))}
                      <React.Fragment>
                      <CssBaseline />
                      <Container fixed>
                       <Typography component="div" style={{ backgroundColor: '#ffffff', height: '5vh' }} />
                      </Container>
                      </React.Fragment>
                      <Button variant="contained" color="primary">
                       Feito
                      </Button>
                </TableBody>

              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    history: PropTypes.arrayOf(
      PropTypes.shape({
        customerId: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt'),
  createData('Ice cream sandwich'),
  createData('Eclair'),
  createData('Cupcake'),
  createData('Gingerbread'),
];

export default function CollapsibleTable() {
  return (
    <div id="page-cuidadores" className="container">
    {/* <PageHeader/> */}
    <header className="page-header">
      <div className="top-bar-container">
        <Link to= "/AppMenu"> 
        <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Cuidador" />      
      </div>

      <div className ="header-content">
        <strong>MINHAS METAS</strong>
      </div>
    </header> 
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="rigth">
              <Typography component="h1">
                Meta
                  </Typography>
                  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}