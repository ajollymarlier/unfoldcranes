import '../styles/NavBar.css'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper , Grid } from '@material-ui/core'
 import AboutImage from '../about.png'
 import SubmitImage from '../submit.png'
 //import HomeImage from '../home.png'

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1
    },
    gridItem:{
        marginTop: "1.35%"
    },
    canvas:{
        width: "100px",
        height: "28px",
        backgroundImage: `url(${AboutImage})`, // TODO change this to home
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    about:{
        width: "100px",
        height: "28px",
        backgroundImage: `url(${AboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    submit:{
        width: "118px",
        height: "28px",
        backgroundImage: `url(${SubmitImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    button:{
        width: "100%",
        height: "100%",
        borderRadius: 0,
        borderColor: "transparent"
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    
    return(
        <div id="navBar" className={classes.root}>

			<Grid	container 
				direction="row"
				justify="left"
                alignItems="stretch"
				spacing={5}
			>
 
             <h1>Unfold</h1 >

                <Grid item className={classes.gridItem}>
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

                <Grid item className={classes.gridItem}>
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

                <Grid item className={classes.gridItem}>
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