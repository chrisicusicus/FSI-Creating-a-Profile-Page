
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)
document.querySelector('p').textContent
dogContent.textContent=document.querySelector('p').textContent

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

const feedingTimeList = document.createElement('ul');
dogDetails.append(feedingTimeList);
const firstItem = document.createElement('li');
firstItem.textcontent = '9:00 am';
feedingTimeList.append(firstItem);


