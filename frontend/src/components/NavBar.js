import '../styles/NavBar.css'

//import Button from '@material-ui/core/Button';
import { Button } from '@material-ui/core'

const NavBar = (props) => {
    return(
        <div id="navBar">
            <h1>Unfold</h1>
            <div id="buttons">
                <Button 
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
                </Button>
            </div>
        </div>
    )
}

export default NavBar