/* eslint-disable no-loop-func */
import '../styles/CraneCanvas.css'

import {useEffect, useState} from 'react'
import CraneMenu from './CraneMenu'
import {Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core'

import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime
//import anime from 'animejs/lib/anime.es.js' 


const getCraneNumber = (craneName) => {
    while (isNaN(parseInt(craneName))){
        craneName = craneName.substring(1)
    }

    return parseInt(craneName)
}

//Adds click listener to each image of a crane
const addCraneClickListeners = (setOpen, currentCranes, setCurrentDisplayedInfo, setSeenCranes) => {
    const midImages = document.querySelectorAll('.midStringImg')
    for(let i = 0; i < midImages.length; i++){
        midImages[i].addEventListener('click', (e) => {
            setSeenCranes(currentCranes[getCraneNumber(e.currentTarget.id) - 1])

            setCurrentDisplayedInfo({
                message: currentCranes[getCraneNumber(e.currentTarget.id) - 1].message,
                country: currentCranes[getCraneNumber(e.currentTarget.id) - 1].country,
                name: currentCranes[getCraneNumber(e.currentTarget.id) - 1].name
            })

            e.currentTarget.src=currentCranes[getCraneNumber(e.currentTarget.id) - 1].backgroundColor + "_mid_read_crane.png"
            setOpen(true)
        })
    }

    const endImages = document.querySelectorAll('.endStringImg')
    for(let i = 0; i < endImages.length; i++){
        endImages[i].addEventListener('click', (e) => {
            setSeenCranes(currentCranes[getCraneNumber(e.currentTarget.id) - 1])

            setCurrentDisplayedInfo({
                message: currentCranes[getCraneNumber(e.currentTarget.id) - 1].message,
                country: currentCranes[getCraneNumber(e.currentTarget.id) - 1].country
            })

            e.currentTarget.src=currentCranes[getCraneNumber(e.currentTarget.id) - 1].backgroundColor + "_end_read_crane.png"
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

const filterCountryCranes = async (countryCode) =>{
    const craneCountRes = await fetch(
        '/cranes/' + countryCode,
        {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({numCranes: 20, currentCranes: []}) //TODO need to include seenCranes as pass in
        }
    )

    const resBody = await craneCountRes.json()
    return resBody
}

const checkEmptyStringRender = (currentCranes, min, max) => {
    let emptyStrings = []
    let splitListLength = currentCranes.slice(min, max).length

    for (let i = 0; i < 5 - splitListLength - 1; i++){
        emptyStrings.push(<img className="emptyStringImg" src="mid_empty_string.png"/>)
    }

    if (5 - splitListLength != 0){
        emptyStrings.push(<img className="emptyStringImg" src="end_empty_string.png"/>)
    }

    console.log(emptyStrings)
    return emptyStrings
}

const CraneCanvas = () => {
    const [open, setOpen] = useState(false)
    const [craneCount, setCraneCount] = useState(0)
    const [currentCranes, setCurrentCranes] = useState([])
    const [currentCountryCode, setCurrentCountryCode] = useState("")
    const [currentDisplayedInfo, setCurrentDisplayedInfo] = useState("This is a message of a crane")
    const [seenCranes, setSeenCranes] = useState([])

    useEffect(() => {
        async function initData() {
            //Gets number of cranes in database
            const numCranes = await getCraneCount()
            setCraneCount(numCranes)

            const getCranesRes = await fetch('/cranes/' + currentCountryCode, {
                method: 'PUT',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({numCranes: 20, currentCranes: seenCranes})
            })

            let getCranesList = await getCranesRes.json() 
            console.log(getCranesList) //TODO remove later 
            
            if (getCranesList.length == 0) {
                alert("No cranes")
                setCurrentCountryCode("")
                return
            }

            setCurrentCranes(getCranesList)
            
            addCraneClickListeners(setOpen, getCranesList, setCurrentDisplayedInfo, setSeenCranes)

            //!Cranes are showing as clicked when they were notx

            //TODO seenCranes not working in backend

            //TODO need to have pop up when query returns 0 and block the refresh

        }

        initData();
    }, [currentCountryCode])

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
                    {currentDisplayedInfo.name + ", " + currentDisplayedInfo.country}
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {currentDisplayedInfo.message}
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

            <Anime id="animationContainer"
                initial={[
                    {
                        targets: '#craneString',
                        translateY: 450,
                        duration: 2500,
                        delay: stagger(200, {start: 40})
                    }
                ]}

                _onUpdate={[
                    {
                        targets: '#craneString',
                        translateY: -450,
                        duration: 10,
                    },
                    {
                        targets: '#craneString',
                        translateY: 450,
                        duration: 2500,
                        delay: stagger(200, {start: 40})
                    }
                ]}
            >        
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
                    <img className="emptyStringImg" src="empty_string.png" alt=""/>
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #0-4
                        if (i >= 5){
                            return <span></span>
                        }

                        if (i === 4){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_end_unread_crane.png"}/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_mid_unread_crane.png"}/>
                        }
                    })}

                    {checkEmptyStringRender(currentCranes, 0, 5).map((stringImg, i) => {
                        return stringImg
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
                    <img className="emptyStringImg" src="empty_string.png" alt=""/>
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #5-9
                        if (i <= 4 || i >= 10){
                            return <span></span>
                        }

                        if (i === 9){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_end_unread_crane.png"}/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_mid_unread_crane.png"}/>
                        }
                    })}

                    {checkEmptyStringRender(currentCranes, 5, 10).map((stringImg, i) => {
                        return stringImg
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
                    <img className="emptyStringImg" src="empty_string.png" alt=""/>
                    {currentCranes.map((crane, i) => {
                        //Stops after getting cranes #10-14
                        if (i <= 9 || i >= 15){
                            return <span></span>
                        }

                        if (i === 14){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_end_unread_crane.png"}/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_mid_unread_crane.png"}/>
                        }
                    })}

                    {checkEmptyStringRender(currentCranes, 10, 15).map((stringImg, i) => {
                        return stringImg
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
                    <img className="emptyStringImg" src="empty_string.png" alt=""/>
                    {currentCranes.map((crane, i) => {                        
                        //Stops after getting cranes #15-19
                        if (i <= 14){
                            return <span></span>
                        }

                        if (i === 19){
                            return <img className="endStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_end_unread_crane.png"}/>
                        }else{
                            return <img className="midStringImg" id={"crane" + (i + 1)} alt="" src={crane.backgroundColor + "_mid_unread_crane.png"}/>
                        }
                    })}

                    {checkEmptyStringRender(currentCranes, 15, 20).map((stringImg, i) => {
                        return stringImg
                    })}
                </Grid>
                <div id="craneMenuDiv"><CraneMenu id="craneMenu" countryFilter={filterCountryCranes} setCurrentCountryCode={setCurrentCountryCode}/></div>
            </Grid>  
            </Anime>        
        </div>
            <div>
                <p class="centered-p">The Unfold crane canvas showcases people's stories from all around the world. Click on a crane to read a note. <br/> <br/>
                {craneCount} cranes and counting...</p>
            </div>
        </div>
    )
}

export default CraneCanvas