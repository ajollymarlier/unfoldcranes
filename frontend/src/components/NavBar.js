import '../styles/NavBar.css'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper , Grid } from '@material-ui/core'
 import AboutImage from '../about.png'
 import SubmitImage from '../submit.png'
 import HomeImage from '../home.png'
 import UnfoldImage from '../unfold.png'

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: "left",
        // flexGrow: 1
    },
    grid:{
        width: "100%",
        height: "100%",
    },
    gridItem:{
      margin: "3%",
      marginLeft: "3.3%",
      alignSelf: "center",
      minHeight: "100%",
      minWidth: "10%",
    },
    unfold:{
      justifySelf: "left",
      height: "100%",
      width: "100%",
      minHeight: "40px",
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
        minWidth: "100%",
        minHeight: "100%",
        borderRadius: 0,
        borderColor: "transparent"
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
                  {/* <img src="unfold.png" className={classes.unfold}/> */}
                </Paper></Grid>

                <Grid item className={classes.gridItem} xs={3} sm={1}>
                <Paper square 
                    elevation={0}
                    className={classes.canvas}>
                    <Button 
                        className={classes.button}
                        variant="outlined"
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
                        onClick={() => {
                            props.setCurrentPage("CraneSubmission")
                        }}
                    >
                    </Button>
                </Paper> </Grid>

                </Grid>
                {/*<Button 
                    variant="outlined"
                    onClick={() => {
                        props.setCurrentPage("CraneCanvas")
                    }}
                >
                        Home
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        props.setCurrentPage("AboutView")
                    }}
               >
                        About
                </Button>
                <Button 
                    variant="outlined"
                    onClick={() => {
                        props.setCurrentPage("CraneSubmission")
                    }}
                >
                        Submit
                </Button>
                <Button 
                    variant="outlined"
                    onClick={() => {
                        window.location = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
                    }}
                >
                        Donate
                </Button>*/}
        </div>
    )
}

export default NavBar