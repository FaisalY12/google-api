const express = require('express')
const app = express()
const cors = require('cors');

const webpages = require("./data")

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!!!!'))

app.get('/searchresults', (req, res) => res.send(webpages) )

app.get('/randomresult', (req, res) => {
    console.log(webpages)
    try{
    res.send(getRandomPage())
    }catch(e) {
        console.log(e.message)
    }
})

function getRandomPage () {
    let len = webpages.length
    let index =  Math.floor(Math.random() * len)
    return webpages[index].url
}
 
module.exports = app;

