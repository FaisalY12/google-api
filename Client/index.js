let searchBttn = document.querySelector("#google-search")
let otherBttn = document.querySelector("#random-search")
let form = document.querySelector('form')


otherBttn.addEventListener('click', getOneResult)




function getOneResult(event){
    console.log(event)
    event.preventDefault()    
    fetch('http://localhost:3000/randomresult')
    .then(res => res.text())
    .then(link => window.location=link)
    .catch(err => console.log(err.message))
}



