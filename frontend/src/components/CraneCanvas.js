import '../styles/CraneCanvas.css'

import CraneMenu from './CraneMenu'
const anime = require('animejs')

const CraneCanvas = () => {
    return(
        <div className="content">
            This is the crane canvas.
            <CraneMenu/>
        </div>
    )
}

export default CraneCanvas