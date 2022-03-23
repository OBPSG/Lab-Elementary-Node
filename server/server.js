const path = require('path');
const fs = require('fs');

const chirps = [
    {
        userName: "Rando Tester",
        body: "This is a test post!"
    },
    {
        userName: "OBP Super Gamer",
        body: "Video Games are lots of fun!"
    },
    {
        userName: "Leftover Sundriez Man",
        body: "I like to build stuff and listen to electronic music!"
    },
    {
        userName: "Andrew Beaudrie",
        body: "This is a nice post, don't you all agree?"
    },
    {
        userName: "Anonymous",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
];

let filePath = path.join(__dirname, '../chirps.json');

fs.writeFileSync(filePath, JSON.stringify(chirps));

let chirpFile = JSON.parse(fs.readFileSync(filePath));

console.log(chirpFile);

chirpFile.forEach(chirp => {
    console.log(`User: ${chirp.userName}`);
    console.log(`Post: ${chirp.body}`);
});
