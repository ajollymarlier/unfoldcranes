import '../styles/CraneMenu.css'

import { Button } from '@material-ui/core';

const CraneMenu = () => {
    return(
        <div id="craneMenu">
            <Button>
                Sort By Country
            </Button>

            <Button>
                Get New Cranes
            </Button>
        </div>
    )
}

export default CraneMenu