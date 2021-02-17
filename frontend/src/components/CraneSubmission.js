import '../styles/CraneSubmission.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
      }
  }));
  
  function CraneSubmission() {
    const classes = useStyles();
  
    return (
        <div>
            <Grid container alignItems="center" direction="column">
                <Box width="50%">
                    Unfold you story here! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus lorem, auctor eu est a, iaculis maximus magna. Suspendisse suscipit tortor nec sollicitudin dictum.
                    <Grid class="form">
                        <form className={classes.root} noValidate autoComplete="off">
                        <Grid container direction="column" justify="center">
                                <Grid container direction="row" justify="flex-start">
                                <TextField required id="outlined-required" label="Name"/>
                                <TextField required id="outlined-required" label="Email"/>
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    variant="outlined"
                                    fullWidth
                                />
                                </Grid>
                                <Grid container justify="flex-end"><Button variant="contained">Submit</Button></Grid>
                        </Grid>
                        </form>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
  }

export default CraneSubmission