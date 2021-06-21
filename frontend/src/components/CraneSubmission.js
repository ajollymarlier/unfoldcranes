import '../styles/CraneSubmission.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import * as Constants from './Constants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    }
  }
));
  
function CraneSubmission() {
    const classes = useStyles();
    var [countryCode, message, name] = React.useState('')        //TODO: incorrect use of hooks, rewrite
    var [activeColor, setActiveColor] = React.useState(Constants.colorData[0].color)

    var submit = async () => {
        const newCrane = await fetch('/cranes', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                message: message,
                country: countryCode,
                backgroundColor: activeColor,
                creationTime: new Date().toLocaleString()
            })
        })
    }

    return (
        <div>
            <Grid container alignItems="center" direction="column">
                <Box width="50%">
                    Unfold you story here! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus lorem, auctor eu est a, iaculis maximus magna. Suspendisse suscipit tortor nec sollicitudin dictum.
                    <Grid class="form">
                        <form className={classes.root} noValidate autoComplete="off">
                        <Grid container direction="column" justify="center">
                                <Grid container direction="row" justify="flex-start">
                                <TextField required id="outlined-required" label="Name" onChange={(event) => {
                                    name = event.target.value
                                }}/>
                                <Autocomplete
                                    onChange={(event, value, reason) => {
                                        countryCode = value.substring(0,3)
                                    }}
                                    options={Constants.countryCodes}
                                    getOptionLabel={(code) => code.substring(4, code.length)}
                                    style={{ width: 174 }}
                                    renderInput={(params) => <TextField {...params} label="Filter By Country" variant="outlined" />}
                                />
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    variant="outlined"
                                    fullWidth 
                                    onChange={(event) => {
                                        message = event.target.value
                                    }}
                                />
                                </Grid>
                                <Grid container justify="flex-start">
                                    <GridList cols={Constants.colorData.length} cellHeight="auto">
                                        {Constants.colorData.map((item) => 
                                            <GridListTile key={item.color} onClick={() => {setActiveColor(item.color)}}>
                                                <img className={item.color == activeColor ? 'active-color color' : 'normal-color color'} srcset={`${item.src}`}/>
                                            </GridListTile>
                                            )}
                                    </GridList>
                                </Grid>
                                <Button variant="contained" onClick={submit}>Submit</Button>
                        </Grid>
                        </form>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}

export default CraneSubmission