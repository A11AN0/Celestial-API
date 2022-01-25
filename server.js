const express = require("express");
const cors = require("cors");
const app = express()

app.use(cors())

let celestialBodies = {
    'Jupiter': {
        'Distance from Sun': '778.5 million km',
        'Orbital Period': '12 Years',
        'Radius': '69,111km',
        'Length of Day': '0d 9h 56m'
    },
    'Neptune': {
        'Distance from Sun': ' 4.495 billion km',
        'Orbital Period': '165 years',
        'Radius': '24,622 km',
        'Length of Day': '0d 16h 6m'
    },
    'Mars': {
        'Distance from Sun': '227.9 million km',
        'Orbital Period': '687 days',
        'Radius': '3,389.5 km',
        'Length of Day': '1d 0h 37m'
    },
    'Earth': {
        'Distance from Sun': '227.9 million km',
        'Orbital Period': '687 days',
        'Radius': '3,389.5 km',
        'Length of Day': '1d 0h 37m'
    },

}

app.listen(9000, ()=>{
    console.log('listening on 9000 :)')
})

app.use(express.static("public"))


