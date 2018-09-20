const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

rp(`https://reddit.com/r/popular.json`)
    .then(res => JSON.parse(res))

    .then(parsedRes => {

        let popArticles = parsedRes.data.children;
        let articleArray = [];

        popArticles.forEach(article => {

            let title = article.data.title;
            let url = article.data.url;
            let author = article.data.author_fullname

            articleArray.push(title, url, author)
            // console.log(article.data.title);
            // console.log(article.data.url);
            // console.log(article.data.author_fullname)
        })

        fs.writeFile(path.join(__dirname, `./popular-articles.json`), JSON.stringify(articleArray, null, 2), (err) => {
            console.log(`It worked`)
        })
    })
    .catch(err => {
        console.log(`Your better than this: ${err}`)
    });
