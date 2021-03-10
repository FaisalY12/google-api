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
    // let results = document.querySelector('section')
    // let newWebsite = document.createElement('p')
    // let urlLink = document.querySelector('#url-result')
    let newUrlLink = document.createElement('p')
    // let urlTitle = document.querySelector('#page-name')
    let newUrlTitle = document.createElement('p')
    // let descrip = document.querySelector('#page-description')
    let newDescrip = document.createElement('p')
    
    newUrlLink.textContent= url
    newUrlTitle.innerHTML =   `<a href = "${url}" a> ${title} </a>`
    newDescrip.textContent = description
    
    website.append(newUrlLink, newUrlTitle, newDescrip)
}
searchResults()

