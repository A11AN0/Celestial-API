const express = require("express");
const cors = require("cors");
const app = express()

app.use(cors())

let celestialBodyList = {
    'jupiter': {
        'Distance from Sun': '778.5 million km',
        'Orbital Period': '12 Years',
        'Radius': '69,111km',
        'Length of Day': '0d 9h 56m'
    },
    'neptune': {
        'Distance from Sun': ' 4.495 billion km',
        'Orbital Period': '165 years',
        'Radius': '24,622 km',
        'Length of Day': '0d 16h 6m'
    },
    'mars': {
        'Distance from Sun': '227.9 million km',
        'Orbital Period': '687 days',
        'Radius': '3,389.5 km',
        'Length of Day': '1d 0h 37m'
    },
    'earth': {
        'Distance from Sun': '149.6 million km',
        'Orbital Period': '365 days',
        'Radius': '6,371 km',
        'Length of Day': '1d 0h 37m',
    },

    'unknown': {
        'Distance from Sun': 'unknown',
        'Orbital Period': 'unknown',
        'Radius': 'unknown',
        'Length of Day': 'unknown'
    }
    

}

app.listen(9000, ()=>{
    console.log('listening on 9000 :)')
})

app.use(express.static("public"))

app.get('/api/celestialBodyList/:celestialBodyName', (request, response)=>{
    const celestialBody = request.params.celestialBodyName.toLowerCase()
    if(celestialBodyList[celestialBody]){
        response.json(celestialBodyList[celestialBody])
    }else {
        response.json(celestialBodyList['unknown'])
    }       
})


