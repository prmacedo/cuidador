import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, email, contato) {
  return { id, date, name, email, contato };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'elvis.p@gmail.com', '+55 7858 3719'),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'paul.mc@gmail.com', '+55 4852 2574'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'tom.scholz@gmail.com', '+55 87857855'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'michael.jk@gmail.com', '+55 71 85522255'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Patients() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Pacientes Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contato</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contato}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais Pacientes
        </Link>
      </div>
    </React.Fragment>
  );
}