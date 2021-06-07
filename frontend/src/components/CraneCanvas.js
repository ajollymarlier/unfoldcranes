/* eslint-disable no-loop-func */
import '../styles/CraneCanvas.css'

import {useEffect, useState} from 'react'
import CraneMenu from './CraneMenu'
import {Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core'
import anime from 'animejs/lib/anime.es.js' 


//Animates crane entrance into crane canvas
const addCraneAnimation = () => {
    const dropAnimation = anime({
        targets: '#craneString',
        translateY: 450,
        duration: 2500,
        delay: anime.stagger(200, {start: 400})
    })

    dropAnimation.restart() //!not working
}

const getCraneNumber = (craneName) => {
    while (isNaN(parseInt(craneName))){
        craneName = craneName.substring(1)
    }

    return parseInt(craneName)
}

//Adds click listener to each image of a crane
const addCraneClickListeners = (setOpen, currentCranes, setCurrentDisplayedMessage) => {
    const midImages = document.querySelectorAll('.midStringImg')
    for(let i = 0; i < midImages.length; i++){
        midImages[i].addEventListener('click', (e) => {
            console.log(e.currentTarget.id)
            console.log(currentCranes[getCraneNumber(e.currentTarget.id) - 1])
            setCurrentDisplayedMessage(currentCranes[getCraneNumber(e.currentTarget.id) - 1].message)

            e.currentTarget.src="mid_read_crane.png"
            setOpen(true)
        })
    }

    const endImages = document.querySelectorAll('.endStringImg')
    for(let i = 0; i < endImages.length; i++){
        endImages[i].addEventListener('click', (e) => {
            console.log(e.currentTarget.id)
            console.log(currentCranes[getCraneNumber(e.currentTarget.id) - 1])
            setCurrentDisplayedMessage([getCraneNumber(e.currentTarget.id, e) - 1].message)

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

const filterCountryCranes = async (countryCode) =>{
    const craneCountRes = await fetch(
        '/cranes/' + countryCode,
        {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({numCranes: 20, currentCranes: []}) //TODO need to include current cranes as pass in
        }
    )

    const resBody = await craneCountRes.json()
    return resBody
}

const CraneCanvas = () => {
    const [open, setOpen] = useState(false)
    const [craneCount, setCraneCount] = useState(0)
    const [currentCranes, setCurrentCranes] = useState([])
    const [currentCountryCode, setCurrentCountryCode] = useState("")
    const [currentDisplayedMessage, setCurrentDisplayedMessage] = useState("This is a message of a crane")

    useEffect(() => {
        async function initData() {
            //Gets number of cranes in database
            const numCranes = await getCraneCount()
            setCraneCount(numCranes)

            const getCranesRes = await fetch('/cranes/' + currentCountryCode, {
                method: 'PUT',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({numCranes: 20, currentCranes: []})
            })

            //!End cranes are showing up as blank

            let getCranesList = await getCranesRes.json() 
            console.log(getCranesList) //TODO remove later       
            setCurrentCranes(getCranesList)
            
            addCraneAnimation()
            addCraneClickListeners(setOpen, getCranesList, setCurrentDisplayedMessage)
        }

        initData();
    }, [currentCountryCode])

    return(
        <div>
            <p>{currentDisplayedMessage}</p>

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

            {/*!When dealing with less than multiple of 5, clicking shows mid crane*/}           
            <Grid 
                id="craneCanvas"
                container
                item
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
            >
                <Grid
                    id="craneString" 
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={2}
                >   
                    {checkStringTopRender(currentCranes, 0)}
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #0-4
                        if (i >= 5){
                            return <span></span>
                        }

                        if (i === currentCranes.length - 1 || i === 4){
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
                    xs={2}
                >        
                    {checkStringTopRender(currentCranes, 5)}
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #5-9
                        if (i <= 4 || i >= 10){
                            return <span></span>
                        }

                        if (i === currentCranes.length - 1 || i === 9){
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
                    xs={2}
                >
                    {checkStringTopRender(currentCranes, 10)}
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #10-14
                        if (i <= 10 || i >= 16){
                            return <span></span>
                        }

                        if (i === currentCranes.length - 1 || i === 15){
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
                    xs={2}
                >
                    {checkStringTopRender(currentCranes, 15)}
                    {currentCranes.map((crane, i) => {                        
                        //Stops after getting cranes #15-19
                        if (i <= 14){
                            return <span></span>
                        }

                        if (i === currentCranes.length - 1 || i === 19){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src="end_unread_crane.png"/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src="mid_unread_crane.png"/>
                        }
                    })}
                </Grid>
                <div id="craneMenuDiv"><CraneMenu id="craneMenu" countryFilter={filterCountryCranes} runAnimation={addCraneAnimation} setCurrentCountryCode={setCurrentCountryCode}/></div>
            </Grid>          
        </div>
            <div>
                <p>The Unfold crane canvas showcases people's stories from all around the world. Click on a crane to read a note.</p>
                <p>{craneCount} cranes and counting...</p>
            </div>
        </div>
    )
}

export default CraneCanvas