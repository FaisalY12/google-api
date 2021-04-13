const express = require('express')
const app = express()
const cors = require('cors');

const webpages = require("./data")

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!!!!'))

app.get('/searchresults', (req, res) =>  {
    if (req.query.search) {
       res.send(search(req.query.search))
    } else {
    res.send(webpages) }
})


app.get('/randomresult', (req, res) => {
    try{
    res.send(getRandomPage())
    }catch(e) {
        console.log(e.message)
    }
})

//----------functions--------------

function getRandomPage () {
    let len = webpages.length
    let index =  Math.floor(Math.random() * len)
    return webpages[index].url
}


function search(arg) { 
    
    return webpages.filter(webpage =>  
        webpage.url.toLowerCase().includes(arg.toLowerCase()) || 
        webpage.description.toLowerCase().includes(arg.toLowerCase())
        )
}
//----------------------------------
module.exports = app;

