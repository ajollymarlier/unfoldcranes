"use strict"

const getUniqueRandoms = (numRandoms, arr) => {
    let randoms = []
    let filteredArr = []

    while(randoms.length < numRandoms){
        let r = Math.floor(Math.random() * arr.length)

        if(randoms.indexOf(r) === -1){
            randoms.push(r)
            filteredArr.push(arr[r])
        }
    }

    return filteredArr
}

const findNewCranes = (req, countryCranes) => {
    const filteredCranes = countryCranes.filter((countryCrane) => {
        for (let i = 0; i < req.body.currentCranes.length; i++){
            const currCraneId = req.body.currentCranes[i]._id
            const countryCraneId = countryCrane._id

            if(currCraneId == countryCraneId){
                return false
            }
        }

        return true
    })

    return filteredCranes
}

module.exports = {
    getUniqueRandoms, 
    findNewCranes
}