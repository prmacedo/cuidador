import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../../../components/Card/Card.js'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '../../../components/Card/CardBody.js'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import './styles.css';

import Typography from '@material-ui/core/Typography';


//add meta
// import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 345,
        boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', /* this adds the "card" effect */
        // padding: '16px',
        textAlign: 'center',
        boxsizing: 'border-box',

    },
    row: {
        content: "",
        display: 'table',
        clear: 'both',
        padding: '2px',

    },

    column: {
        float: 'left',
        // width (minWidth: '700px'): '25%',
        padding: '0 10px',

        width: "100%",
        '@media (min-width: 600px)': {
            width: "25%"
        }
    },


}));

export default function CardPatient() {
    //componente abrir edit
    // const history = useHistory();
    const [teste, setTeste] = useState('');
    function handleCreateDialog(e) {
        e.preventDefault()
        console.log({
            teste,
        });
    }

        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
        const classes = useStyles();

        return (


            <div className={classes.row}>
                <div className={classes.column}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="text"
                                alt="Michael"
                                title="Michael Thomas"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Michael T.
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Paciente que sofre de dor crônica na perna esquerda. Está seguindo o tratamento a X dias.
                         </Typography>
                            </CardContent>
                        </CardActionArea>

                        
                        <Dialog className={classes.dialogo} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <form onSubmit={handleCreateDialog}>
                                <DialogTitle id="form-dialog-title"><b>Adicionar Meta</b></DialogTitle>
                                <DialogContent >
                                    <DialogContentText className={classes.texto}>
                                        <strong>Adicionar meta ao to-do list do paciente. <br />Ps. Ao adicionar uma meta, ela irá automaticamente para o perfil do paciente. </strong> <br />
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="meta"
                                        label="Meta"
                                        type="text"
                                        fullWidth
                                        value={teste}
                                        onChange={(e) => { setTeste(e.target.value) }}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button type="submit" color="primary">
                                        Adicionar
                                    </Button>
                                </DialogActions>
                            </form>
                        </Dialog>
                    </Card>
                </div>
              
   
            </div>


        );
    }