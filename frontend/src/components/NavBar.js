import '../styles/NavBar.css'

//import Button from '@material-ui/core/Button';
import { Button } from '@material-ui/core'

const NavBar = (props) => {
    return(
        <div id="navBar">
            <h1>Cranes for Thought</h1>
            <Button 
                variant="outlined"
                color="primary"
                onClick={() => {
                    props.setCurrentPage("CraneCanvas")
                }}
            >
                    Home
            </Button>
            <Button 
                variant="outlined"
                color="primary"
                onClick={() => {
                    props.setCurrentPage("AboutView")
                }}
            >
                    About
            </Button>
            <Button 
                variant="outlined"
                color="primary"
                onClick={() => {
                    props.setCurrentPage("CraneSubmission")
                }}
            >
                    Submit
            </Button>
            <Button 
                variant="outlined"
                color="primary"
                onClick={() => {
                    window.location = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
                }}
            >
                    Donate
            </Button>
        </div>
    )
}

export default NavBar