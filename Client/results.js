
function searchResults(){
    console.log()
    fetch('http://localhost:3000/searchresults')
    .then(res => res.json())
    .then(responseData => {
        responseData.forEach(website => renderData(website))
    })
    .catch(err => console.log(err.message))
}


function renderData({url, title, description}) {
    let results = document.querySelector('section')
    let website = document.querySelector('#website')
    let newWebsite = document.createElement('p')
    let urlLink = document.querySelector('#url-result')
    let newUrlLink = document.createElement('p')
    let urlTitle = document.querySelector('#page-name')
    let newUrlTitle = document.createElement('p')
    let descrip = document.querySelector('#page-description')
    let newDescrip = document.createElement('p')
    newUrlLink.textContent= url
    newUrlTitle.innerHTML =   `<a href = "https://en.wikipedia.org/" a> ${title} </a>`
    newDescrip.textContent = description
    website.append(newUrlLink, newUrlTitle, newDescrip)
    results.append(newWebsite)
}
searchResults()

