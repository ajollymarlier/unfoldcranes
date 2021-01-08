import '../styles/CraneCanvas.css'

import {useEffect} from 'react'
import CraneMenu from './CraneMenu'
import {Grid, Button} from '@material-ui/core'
import anime from 'animejs/lib/anime.es.js' 

//Animates crane entrance into crane canvas
const addCraneAnimation = () => {
    //TODO maybe add load cranes button and call this when clicked
    anime({
        targets: '#craneString',
        translateY: 450,
        duration: 2500,
        delay: anime.stagger(200, {start: 400})
    })
}

//Adds click listener to each image of a crane
const addCraneClickListeners = () => {
    const midImages = document.querySelectorAll('.midStringImg')
    for(let i = 0; i < midImages.length; i++){
        midImages[i].addEventListener('click', (e) => {
            //TODO add open crane function
            e.currentTarget.src="mid_read_crane.png"
        })
    }

    const endImages = document.querySelectorAll('.endStringImg')
    for(let i = 0; i < endImages.length; i++){
        endImages[i].addEventListener('click', (e) => {
            //TODO add open crane function
            e.currentTarget.src="end_read_crane.png"
        })
    }
}

const CraneCanvas = () => {
    useEffect(() => {
        addCraneAnimation()
        addCraneClickListeners()
    })

    return(
        <div className="content">
            <Grid 
                id="craneCanvas"
                container
                item
                direction="row"
                justify="center"
                alignItems="center"
                xs={8}
            >
                <Grid
                    id="craneString" 
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >   
                    <img src="empty_string.png" alt=""/>
                    <img className="midStringImg" id="crane1" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane2" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane3" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane4" alt="" src="mid_unread_crane.png"/>
                    <img className="endStringImg" id="crane5" alt="" src="end_unread_crane.png"/>
                </Grid>

                <Grid 
                    id="craneString" 
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="empty_string.png" alt=""/>
                    <img className="midStringImg" id="crane6" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane7" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane8" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane9" alt="" src="mid_unread_crane.png"/>
                    <img className="endStringImg" id="crane10" alt="" src="end_unread_crane.png"/>
                </Grid>

                <Grid
                    id="craneString" 
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="empty_string.png" alt=""/>
                    <img className="midStringImg" id="crane11" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane12" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane13" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane14" alt="" src="mid_unread_crane.png"/>
                    <img className="endStringImg" id="crane15" alt="" src="end_unread_crane.png"/>
                </Grid>

                <Grid
                    id="craneString"  
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="empty_string.png" alt=""/>
                    <img className="midStringImg" id="crane16" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane17" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane18" alt="" src="mid_unread_crane.png"/>
                    <img className="midStringImg" id="crane19" alt="" src="mid_unread_crane.png"/>
                    <img className="endStringImg" id="crane20" alt="" src="end_unread_crane.png"/>
                </Grid>
            </Grid>
            

            <CraneMenu/>
        </div>
    )
}

export default CraneCanvas