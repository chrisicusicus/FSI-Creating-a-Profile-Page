
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)
document.querySelector('div').textContent


let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let descriptionHeader = document.createElement('h3')
descriptionHeader.append('Description')
descriptionHeader.setAttribute('class', 'dog-details')
content.append(descriptionHeader)

let dogDetails = document.createElement('p')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)
dogDetails.textContent=document.querySelector('p').textContent

let timesHeader = document.createElement('h3')
timesHeader.append('Feeding Times:')
timesHeader.setAttribute('class', 'dog-details')
content.append(timesHeader)
