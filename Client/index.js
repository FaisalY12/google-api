let searchBttn = document.querySelector("#google-search")
let otherBttn = document.querySelector("#other-search")
let form = document.querySelector('form')

let x =2;
otherBttn.addEventListener('click', getOneResult)
searchBttn.addEventListener('click', search)

function search(event) {
    if(x>1) { event.preventDefault() }
}

function getOneResult(event){
    console.log(event)
    event.preventDefault()    
    fetch('http://localhost:3000/randomresult')
    .then(res => res.text())
    .then(link => window.location=link)
    .catch(err => console.log(err.message))
}



