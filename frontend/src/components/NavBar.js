import '../styles/NavBar.css'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper , Grid } from '@material-ui/core'
 import AboutImage from '../about.png'
 import SubmitImage from '../submit.png'
 import HomeImage from '../home.svg'
 import UnfoldImage from '../unfold.svg'

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: "left",
        // flexGrow: 1
    },
    grid:{
      marginTop: "1%",
      width: "100%",
      height: "100%",
    },
    gridItem:{
      margin: "2%",
      marginLeft: "3%",
      marginBottom: "5%",
      alignSelf: "center",
      minWidth: "10%",
      padding: '0%'
    },
    unfold:{
      justifySelf: "left",
      height: "100%",
      width: "100%",
      minHeight: "50px",
      backgroundImage: `url(${UnfoldImage})`,
      backgroundColor: "transparent",
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    canvas:{
        backgroundImage: `url(${HomeImage})`,
        backgroundColor: "transparent",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    about:{
        backgroundImage: `url(${AboutImage})`,
        backgroundColor: "transparent",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    submit:{
        backgroundImage: `url(${SubmitImage})`,
        backgroundColor: "transparent",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    button:{
        margin: 0,
        padding: 0,
        border: 0,
        minWidth: "100%",
        minHeight: "25px",
        borderRadius: 0,
        borderColor: "transparent",
        '&:hover':{
          backgroundColor: "transparent"
        },
        '&:active':{
          color: "transparent"
        }
      }
}));

const NavBar = (props) => {
    const classes = useStyles();
    
    return(
        <div id="navBar" className={classes.root}>
			<Grid	container 
        className={classes.grid} 
			>
                <Grid item className={classes.gridItem}
                  xs={12} sm={3}>
                <Paper square 
                    elevation={0} 
                    className={classes.unfold}
                    >
                </Paper></Grid>

                <Grid item className={classes.gridItem} xs={3} sm={1}>
                <Paper square 
                    elevation={0}
                    className={classes.canvas}>
                    <Button 
                        className={classes.button}
                        variant="outlined"
                        disableRipple
                        onClick={() => {
                            props.setCurrentPage("CraneCanvas")
                        }}
                    >
                    </Button>
                </Paper></Grid>

                <Grid item className={classes.gridItem} xs={3} sm={1}>
                <Paper square
                    elevation={0}
                    className={classes.about}>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        disableRipple
                        onClick={() => {
                            props.setCurrentPage("AboutView")
                        }}
                    >
                    </Button>
                </Paper> </Grid>

                <Grid item className={classes.gridItem} xs={3} sm={1}>
                <Paper square
                    elevation={0}
                    className={classes.submit}>
                    <Button 
                        className={classes.button}
                        variant="outlined"
                        disableRipple
                        onClick={() => {
                            props.setCurrentPage("CraneSubmission")
                        }}
                    >
                    </Button>
                </Paper> </Grid>

                </Grid>s
        </div>
    )
}

export default NavBar