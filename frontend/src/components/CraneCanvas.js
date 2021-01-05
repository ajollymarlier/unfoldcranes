import '../styles/CraneCanvas.css'

import {useEffect} from 'react'
import CraneMenu from './CraneMenu'
const anime = require('animejs')

const CraneCanvas = () => {
    useEffect(() => {
        /*anime({
            targets: '#craneCanvas',
            translateX: 250,
            duration: 3000
        })*/
    })

    return(
        <div className="content">
            <div id="craneCanvas">
                <img src="main_page_mockup.png"/>
                <img src="logo512.png"/>
                <img src="main_page_mockup.png"/>
                <img src="logo512.png"/>
                <img src="tall_img.png"/>
            </div>

            <CraneMenu/>
        </div>
    )
}

export default CraneCanvas