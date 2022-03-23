const path = require('path');
const fs = require('fs');
const request = require('request-promise');

let articles = [];

request("https://www.reddit.com/r/popular.json")
.then(res => {return JSON.parse(res)})
.then(data => {
    data.data.children.forEach((child) => {
        articles.push({
            title: child.data.title,
            author: child.data.author_fullname,
            url: child.data.url
        });
        // console.log(child.data.title);
        // console.log(child.data.author_fullname);
        // console.log(child.data.url);
    });
    //console.log(articles);
    let filePath = path.join(__dirname, 'popular-articles.json');
    fs.writeFileSync(filePath, JSON.stringify(articles));
    });


