import { topDomString } from "/overview.js";
import { bottomDomString } from "/overview.js";

const overviewLink = document.querySelector('#overview');
const repositoriesLink = document.querySelector('#Repositories');
const projectsLink = document.querySelector('#projects');
const packagesLink = document.querySelector('#packages');
const mainLink = document.querySelector('.active');


const topBox = document.getElementById('topBox');
const bottomBox = document.getElementById('bottomBox');


overviewLink.addEventListener('click', (e) => {

  e.preventDefault()

  topBox.innerHTML = topDomString;

  bottomBox.innerHTML = bottomDomString;


  repositoriesLink.classList.remove('active');
  packagesLink.classList.remove('active');
  projectsLink.classList.remove('active');
  overviewLink.classList.add('active');

})
