/* eslint-disable no-restricted-globals */
import '../styles/CraneMenu.css'

import { Button, TextField } from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab'
import * as Constants from './Constants';

import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

const CraneMenu = (props) => {
    let currentCountryCode = ""

    //TODO need to clear autocomplete text when blocking refresh

    return(
        <div id="craneMenu">
            <Autocomplete
                options={Constants.countryCodes}
                getOptionLabel={(code) => code.substring(4, code.length)}
                onChange={(event, value) => {
                    if (value !== null){
                        currentCountryCode = value.substring(0, 3)
                    }else{
                        currentCountryCode = ""
                    }
                }}
                renderInput={(params) => <TextField {...params} label="Filter By Country" variant="outlined" />}
            />
            <Anime id="animationContainer"
                initial={[
                    {
                        targets: '#craneString',
                        translateY: 450,
                        duration: 2500,
                        delay: stagger(200, {start: 40})
                    }
                ]}

                _onClick={[
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
                <Button id="newCranes" onClick={async () => {
                    await props.setCurrentCountryCode(currentCountryCode) //!Clicking same country again queries ""

                }} variant="contained" color="primary">
                    Get New Cranes
                </Button>
            </Anime>
        </div>
    )
}

export default CraneMenu