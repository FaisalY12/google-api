let searchBttn = document.querySelector("#google-search")
let otherBttn = document.querySelector("#random-search")
let form = document.querySelector('form')
let searchBox = document.querySelector('#search-box')

searchBttn.addEventListener('click', setSearch)
otherBttn.addEventListener('click', getOneResult)

function setSearch(event) {
    event.preventDefault()
    sessionStorage.setItem('search', searchBox.value) 
    window.location ="results.html"
    
    
}


function getOneResult(event){
    event.preventDefault()    
    fetch('http://localhost:3000/randomresult')
    .then(res => res.text())
    .then(link => window.location=link)
    .catch(err => console.log(err.message))
}



