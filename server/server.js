const path = require('path');
const fs = require('fs');

let chirpsArray = [
    {
        name: 'Michael',
        chirp: 'Some Chirp!'
    },
    {
        name: 'Tam',
        chirp: 'Some Chirp!'
    },
    {
        name: 'Jax',
        chirp: 'Some Chirp!'
    },
    {
        name: 'Logan',
        chirp: 'Some Chirp!'
    },
    {
        name: 'Nate',
        chirp: 'Some Chirp!'
    },
];

fs.writeFile(path.join(__dirname, '../chirps.json'), JSON.stringify(chirpsArray, null, 2), (err) => {
    if (err) console.log(`You fudged up home: ${err}`);

    console.log(`It should have worked!`);
});

fs.readFile(path.join(__dirname, `../chirps.json`), (err, data) => {
    if (err) console.log(`You jacked up fool: ${err}`);
        
    let chirpData = JSON.parse(data)
        console.log(chirpData)    
});