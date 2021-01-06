import '../styles/CraneCanvas.css'

import {useEffect} from 'react'
import CraneMenu from './CraneMenu'
import {Grid} from '@material-ui/core'
const anime = require('animejs')

//Animates crane entrance into crane canvas
const addCraneAnimation = () => {

}

//Adds click listener to each image of a crane
const addCraneClickListeners = () => {
    const images = document.querySelectorAll('img')
    for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', (e) => {
            //TODO add open crane function
            e.currentTarget.src="mid_read_crane.png"
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
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="end_unread_crane.png"/>
                </Grid>

                <Grid 
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="end_unread_crane.png"/>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="end_unread_crane.png"/>
                </Grid>

                <Grid 
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={3}
                >
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="mid_unread_crane.png"/>
                    <img src="end_unread_crane.png"/>
                </Grid>
            </Grid>
            

            <CraneMenu/>
        </div>
    )
}

export default CraneCanvas