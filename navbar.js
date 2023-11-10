
export const navClickFunction = (topDomString, bottomDomString) => {

const overviewLink = document.querySelector('#overview');
const repositoriesLink = document.querySelector('#Repositories');
const projectsLink = document.querySelector('#projects');
const packagesLink = document.querySelector('#packages');


const topBox = document.getElementById('topBox');
const bottomBox = document.getElementById('bottomBox');


overviewLink.addEventListener('click', (e) => {

  e.preventDefault()

  topBox.innerHTML = topDomString;

  bottomBox.innerHTML = bottomDomString;

  // renderToDom(topBox, topDomString);

  // renderToDom(bottomBox, bottomDomString);



  repositoriesLink.classList.remove('active');
  packagesLink.classList.remove('active');
  projectsLink.classList.remove('active');
  overviewLink.classList.add('active');

})
};
