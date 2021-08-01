import '../styles/NavBar.css'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper , Grid } from '@material-ui/core'
 import AboutImage from '../about.svg'
 import SubmitImage from '../submit.svg'
 import HomeImage from '../home.svg'
 import UnfoldImage from '../unfold.svg'
 import HomeDotImage from '../homedot.svg'
 import AboutDotImage from '../aboutdot.svg'
 import SubmitDotImage from '../submitdot.svg'

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: "left",
    },
    grid:{
      margin: "1%",
      width: "100%",
      height: "100%",
    },
    gridItem:{
      marginTop: '2%',
      marginBottom: '2%',
      marginLeft: '3%',
      marginRight: '3%',
      alignSelf: "top",
      minWidth: "10%",
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
    paperButton:{
      marginTop: "8%",
      backgroundColor: "transparent",
      backgroundSize: 'contain',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
    },
    canvasChosen:{
      backgroundImage: `url(${HomeDotImage})`,
      minHeight: '40px',
    },
    canvas:{
      backgroundImage: `url(${HomeImage})`,
      '&:hover':{
      backgroundImage: `url(${HomeDotImage})`,
      },
      '&:hover > button':{
        minHeight: '40px',
      },
    },
    aboutChosen:{
      backgroundImage: `url(${AboutDotImage})`,
      minHeight: '40px',
    },
    about:{
      backgroundImage: `url(${AboutImage})`,
      '&:hover':{
      backgroundImage: `url(${AboutDotImage})`,
      },
      '&:hover > button':{
        minHeight: '40px',
      },
    },
    submitChosen:{
      backgroundImage: `url(${SubmitDotImage})`,
      minHeight: '40px',
    },
    submit:{
      backgroundImage: `url(${SubmitImage})`,
      '&:hover':{
      backgroundImage: `url(${SubmitDotImage})`,
      },
      '&:hover > button':{
        minHeight: '40px',
      },
    },
    button:{
      display: 'block',
      margin: 0,
      padding: 0,
      border: 0,
      minHeight: '25px',
      width: '100%',
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
                    className={(props.currentPage==="CraneCanvas")?
                    (`${classes.canvasChosen} ${classes.paperButton}`):
                    (`${classes.canvas} ${classes.paperButton}`)}
                    >
                    <Button 
                        className={classes.button}
                        variant="outlined"
                        disableRipple
                        onClick={() => {
                            props.setCurrentPage("CraneCanvas")
                        }}
                    >
                    </Button>
                </Paper>
              </Grid>

                <Grid item className={classes.gridItem} xs={3} sm={1}>
                <Paper square
                    elevation={0}
                    className={(props.currentPage==="AboutView")?
                    (`${classes.aboutChosen} ${classes.paperButton}`):
                    (`${classes.about} ${classes.paperButton}`)}
                    >
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
                    className={(props.currentPage==="CraneSubmission")?
                    (`${classes.submitChosen} ${classes.paperButton}`):
                    (`${classes.submit} ${classes.paperButton}`)}
                    >
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

                </Grid>
        </div>
    )
}

export default NavBar