const path = require('path');
const fs = require('fs');
const request = require('request-promise');

const folderpath = path.join(__dirname, "/downloads");

request("https://www.reddit.com/r/popular.json")
.then(res => {return JSON.parse(res)})
.then(data => {
    data.data.children.forEach(child => {
        if(path.extname(child.data.url))
        {
            request(child.data.url, {encoding: "binary"})
            .then(media => fs.writeFileSync(`./downloads/${child.data.id}${path.extname(child.data.url)}`, media, {encoding: "binary"}));
        }
    });
})
.catch(error => console.log(error));