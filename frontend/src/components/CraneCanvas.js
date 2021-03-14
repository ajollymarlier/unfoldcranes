/* eslint-disable no-loop-func */
import '../styles/CraneCanvas.css'

import {useEffect, useState} from 'react'
import CraneMenu from './CraneMenu'
import {Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core'
import anime from 'animejs/lib/anime.es.js' 

let currentDisplayedMessage = "This is a message of a crane"

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
const addCraneClickListeners = (setOpen, currentCranes) => {
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

const checkStringTopRender = (currentCranes, min) => {
    if (currentCranes.length > min){
        return <img src="empty_string.png" alt=""/>
    }

    return
}

const CraneCanvas = () => {
    const [open, setOpen] = useState(false)
    const [craneCount, setCraneCount] = useState(0)
    const [currentCranes, setCurrentCranes] = useState([])

    useEffect(async () => {
        //Gets number of cranes in database
        const numCranes = await getCraneCount()
        setCraneCount(numCranes)

        const getCranesRes = await fetch('/cranes', {
            method: 'PUT',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({numCranes: 20, currentCranes: []})
        })

        let getCranesList = await getCranesRes.json()        
        setCurrentCranes(getCranesList)
        
        addCraneAnimation()
        addCraneClickListeners(setOpen, getCranesList)
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
                    {checkStringTopRender(currentCranes, 0)}
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #0-4
                        if (i >= 5){
                            return
                        }

                        if (i == currentCranes.length - 1 || i == 4){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src="end_unread_crane.png"/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src="mid_unread_crane.png"/>
                        }
                    })}
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
                    {checkStringTopRender(currentCranes, 5)}
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #0-4
                        if (i <= 4 || i >= 10){
                            return
                        }

                        if (i == currentCranes.length - 1 || i == 9){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src="end_unread_crane.png"/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src="mid_unread_crane.png"/>
                        }
                    })}
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
                    {checkStringTopRender(currentCranes, 10)}
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #0-4
                        if (i <= 10 || i >= 15){
                            return
                        }

                        if (i == currentCranes.length - 1 || i == 14){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src="end_unread_crane.png"/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src="mid_unread_crane.png"/>
                        }
                    })}
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
                    {checkStringTopRender(currentCranes, 15)}
                    {currentCranes.map((crane, i) => {                        
                        //Stops after getting cranes #0-4
                        if (i <= 15){
                            return
                        }

                        if (i == currentCranes.length - 1 || i == 19){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src="end_unread_crane.png"/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src="mid_unread_crane.png"/>
                        }
                    })}
                </Grid>
            </Grid>
            <CraneMenu/>              
        </div>

            <p>{craneCount} cranes and counting...</p>
        </div>
    )
}

export default CraneCanvas