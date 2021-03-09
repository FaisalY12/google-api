let searchBttn = document.querySelector("#google-search")
let otherBttn = document.querySelector("#other-search")

searchBttn.addEventListener('submit', searchForResults)

otherBttn.addEventListener('submit', getOneResult)

function getOneResult(){
fetch('localhost:3000/randomresult')
.catch(err => console.log(err.message))
}


function searchForResults(event){
event.preventDefault()
let results = document.querySelector("#search-box");
getAllResults(results)
}

function getAllResults(){
fetch('localhost:3000/searchresults')
.then(loadResultsPage)
}

function loadResultsPage(){
  
}