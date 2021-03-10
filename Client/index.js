let searchBttn = document.querySelector("#google-search")
let otherBttn = document.querySelector("#random-search")

// searchBttn.addEventListener('submit', searchForResults)

otherBttn.addEventListener('click', getRandomResult)

function getRandomResult(event){
    // event.preventDefault()
fetch('http://localhost:3000/randomresult',{
    method: 'GET',
    mode: 'no-cors',
    header: {
        'Content-Type': 'application/json'
    },

})
.then(res => res.json())
.then(data => console.log(data))
//.catch(err => console.log(err.message))
}


// function searchForResults(event){
// event.preventDefault()
// let results = document.querySelector("#search-box");
// getAllResults(results)
// }

// function getAllResults(){
// fetch('localhost:3000/searchresults')
// .then(loadResultsPage)
// }

// function loadResultsPage(){
  
// }

// getOneResult()