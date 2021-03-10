

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
    let website = document.createElement('div')
    let urlLink = document.createElement('span')
    let urlTitle = document.createElement('h3')
    let descrip = document.createElement('p')
    
    urlLink.textContent= url
    urlTitle.innerHTML =   `<a href = "https://en.wikipedia.org/" a> ${title} </a>`
    descrip.textContent = description
   
    website.append(urlLink, urlTitle, descrip)
    results.append(website)
        
}

searchResults()



