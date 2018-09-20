const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

rp(`https://reddit.com/r/popular.json`)
    .then(response => JSON.parse(response))
    .then(parsedRes => {

        let popArticles = parsedRes.data.children;

        popArticles.forEach(article => {

            let media = article.data.url;
            let ext = path.extname(media);

            if (ext === '.jpg' || ext === '.gif' || ext === '.mov') {
                rp({
                    url: media,
                    encoding: null
                })
                    .then(response => {

                        let mediaID = article.data.id;

                        fs.writeFile(path.join(__dirname, `./downloads/${mediaID}${ext}`), response, (err) => {
                            if (err) console.log(`Haven't gotten it yet: ${err}`)
                        })
                    })
            }
        });
    })
    
    .catch(err => {
        console.log(`Not happenin: ${err}`)
    })
