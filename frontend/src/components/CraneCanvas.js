/* eslint-disable no-loop-func */
import '../styles/CraneCanvas.css'

import {useEffect, useState} from 'react'
import CraneMenu from './CraneMenu'
import {Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core'
import anime from 'animejs/lib/anime.es.js' 

let currentDisplayedMessage = "This is a message of a crane"
const currentCranes = [
    {message: "Crane1 Message"},
    {message: "Crane2 Message"},
    {message: "Crane3 Message"},
    {message: "Crane4 Message"},
    {message: "Crane5 Message"},
    {message: "Crane6 Message"},
    {message: "Crane7 Message"},
    {message: "Crane8 Message"},
    {message: "Crane9 Message"},
    {message: "Crane10 Message"},
    {message: "Crane11 Message"},
    {message: "Crane12 Message"},
    {message: "Crane13 Message"},
    {message: "Crane14 Message"},
    {message: "Crane15 Message"},
    {message: "Crane16 Message"},
    {message: "Crane17 Message"},
    {message: "Crane18 Message"},
    {message: "Crane19 Message"},
    {message: "Crane20 Message"}
]

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

const getCraneNumber = (craneName) => {
    while (isNaN(parseInt(craneName))){
        craneName = craneName.substring(1)
    }

    return parseInt(craneName)
}

//Adds click listener to each image of a crane
const addCraneClickListeners = (setOpen) => {
    const midImages = document.querySelectorAll('.midStringImg')
    for(let i = 0; i < midImages.length; i++){
        midImages[i].addEventListener('click', (e) => {
            currentDisplayedMessage = currentCranes[getCraneNumber(e.currentTarget.id) - 1].message

            e.currentTarget.src="mid_read_crane.png"
            setOpen(true)
        })
    }

    const endImages = document.querySelectorAll('.endStringImg')
    for(let i = 0; i < endImages.length; i++){
        endImages[i].addEventListener('click', (e) => {
            currentDisplayedMessage = currentCranes[getCraneNumber(e.currentTarget.id, e) - 1].message

            e.currentTarget.src="end_read_crane.png"
            setOpen(true)
        })
    }
}

const getCraneCount = async () => {
    const craneCountRes = await fetch(
        '/craneCount',
        {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        }
    )

    const resBody = await craneCountRes.json()
    return resBody.numCranes
}

const CraneCanvas = () => {
    const [open, setOpen] = useState(false)
    const [craneCount, setCraneCount] = useState(0)
    const [currentCranes, setCurrentCranes] = useState([])

    useEffect(async () => {
        addCraneAnimation()
        addCraneClickListeners(setOpen)
        
        //Gets number of cranes in database
        const numCranes = await getCraneCount()
        setCraneCount(numCranes)

        const getCranesRes = await fetch('/cranes', {
            method: 'PUT',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({numCranes: 25, currentCranes: []})
        })

        setCurrentCranes(getCranesRes)
    }, [])

    return(
        <div>

        <div className="content">
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Message
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {currentDisplayedMessage}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpen(false)
                        }}
                        color="primary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

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

            <p>{craneCount} cranes and counting...</p>
        </div>
    )
}

export default CraneCanvas