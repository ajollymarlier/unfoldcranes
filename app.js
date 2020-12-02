'use strict';
const log = console.log;

// Express
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// Mongo and Mongoose
const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose');
const { Crane } = require('./models/schema');
const utils = require('./utils/utils')

/* 
Adding new crane to database.

Expects req body structure of 
{   
    message: String,
    country: String, // This is the standard country code
    backgroundColor: String,
    creationTime: Date
}

Returned JSON should be the database document added.
*/
app.post('/cranes', async (req, res) => {
    try{
        const addCraneRes = await Crane.insertMany([{
            message: req.body.message,
            country: req.body.country,
            backgroundColor: req.body.backgroundColor,
            creationTime: req.body.creationTime
        }]) 

        res.send(addCraneRes)
    }
    catch (err){
        //throw err
        res.status(500).send()
    }
})

/*
Getting target number of cranes from target country

Expects req body structure of 
{
    numCranes: Number,
    currentCranes: List[Crane]
}

The res body should contain the structure
{
    resCranes: // list of returned cranes length <= <numCranes>
                    smaller length would occur if not enough cranes exist for the given country
}
*/
app.get('/cranes/:country', async (req, res) => {
    //! For testing all cranes only
    /*const allCraneRes = await Crane.find()
    res.send(allCraneRes)*/

    try{
        const countryCranes = await Crane.find({country: req.params.country})
        
        //TODO need more optimized search for later
        const filteredCranes = utils.findNewCranes(req, countryCranes)

        const finalCranes = utils.getUniqueRandoms(req.body.numCranes, filteredCranes)
        res.send(finalCranes)
    }
    catch (err){
        //throw err
        res.status(500).send()
    }
})

// Connection confirmation dialog
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
});
