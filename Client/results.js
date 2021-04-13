let searchTerm = sessionStorage.getItem('search')



function searchResults(){
    let param ="";
    if(searchTerm){
        param= param + `?search=${searchTerm}`
    }
    fetch(`http://localhost:3000/searchresults${param}`)
    .then(res => res.json())
    .then(responseData => {
        responseData.forEach(website => renderData(website))
    })
    .catch(err => console.log(err.message))
}


function renderData({url, title, description}) {
    
    let newUrlLink = document.createElement('span')
    let newUrlTitle = document.createElement('div')
    let newDescrip = document.createElement('p')
    
    newUrlLink.textContent= url
    newUrlTitle.innerHTML =   `<a href = "${url}" a> ${title} </a>`
    newDescrip.textContent = description
    
    website.append(newUrlLink, newUrlTitle, newDescrip)
}
searchResults()


//-------------------------results page search bar---------------------------------------

let searchInput = document.querySelector("#google-search")
let form = document.querySelector("form")



form.addEventListener('submit', setSearch)

function setSearch(event) {
    event.preventDefault()
    if(searchInput.value) {
    sessionStorage.setItem('search', searchInput.value )
    window.location ="results.html" 
    }  
}

