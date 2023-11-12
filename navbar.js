
// import { renderToDom } from "../utils/renderToDom.js";
// import { newProjectForm } from "../components/new_projects_form.js";
// import { pinnedRepoForm } from "../components/pinned_repo_form.js";

// renderToDom = (divId, html) => {
//   const selectedDiv = document.querySelector(divId);
//   selectedDiv.innerHTML = html;
// };


// const topDiv = document.querySelector('#topBox');
// const bottomDiv = document.querySelector('#bottomBox');

// document.querySelector('.navbar').addEventListener('click', (e) => {
//   if (e.target.id.includes('overview')) { 
//     renderToDom('#topBox', newProjectForm); 
//     renderToDom('#bottomBox', pinnedRepoForm);
//     console.log("overview clicked")
//   } else if (e.target.classList.contains('repositories')) {
//     renderToDom(topDiv, newProjectForm); 
//     renderToDom(bottomDiv, newProjectForm);
//   } else if (e.target.classList.contains('project')) {
//     renderToDom(topDiv, newProjectForm);
//     renderToDom(bottomDiv, newProjectForm);
//   } else if (e.target.classList.contains('packages')) {
//     renderToDom(topDiv, newProjectForm);
//     renderToDom(bottomDiv, newProjectForm);
//   }
//   console.log("got clicked")
// });


// const overviewLink = document.querySelector('#overview');
// const repositoriesLink = document.querySelector('#Repositories');
// const projectsLink = document.querySelector('#projects');
// const packagesLink = document.querySelector('#packages');

// const topBox = document.querySelector('#topBox');
// const bottomBox = document.querySelector('#bottomBox');


// overviewLink.addEventListener('click', (e) => {

// e.preventDefault()

// bottomBox.innerHTML = ""


// topBox.innerHTML = ""


// repositoriesLink.classList.remove('active');
// packagesLink.classList.remove('active');
// projectsLink.classList.remove('active');
// overviewLink.classList.add('active');

// })

// ;




///////////////////////////////////////////////////



// function navClickFunction(linkId, boxes) {
//   const link = document.querySelector(`#${linkId}`);
// console.log("this is link",link)

//   link.addEventListener('click', (e) => {
//       e.preventDefault();

//       boxes.forEach(box => box.innerHTML = "");


//       document.querySelectorAll('.navbar a').forEach(navLink => navLink.classList.remove('active'));


//       link.classList.add('active');

// console.log("linkId",linkId)
//       switch (linkId) {
//           case 'overview':
//               break;
//           case 'repositories':
//               break;

//       }
//   });
// }


// navClickFunction('overview', ['topBox', 'bottomBox']);
// navClickFunction('repositories', ['topBox', 'bottomBox']);
// navClickFunction('projects', ['topBox', 'bottomBox']);
// navClickFunction('packages', ['topBox', 'bottomBox']);

export const navigateTo = (page) => {
  return console.log('page',page)
  // You can implement logic to load content based on the selected page
  // switch (page) {
  //   case 'home':
  //     document.getElementById('content').innerHTML = '<h2>Welcome to the Home Page!</h2>';
  //     break;
  //   case 'about':
  //     document.getElementById('content').innerHTML = '<h2>About Us</h2><p>This is the about page content.</p>';
  //     break;
  //   case 'contact':
  //     document.getElementById('content').innerHTML = '<h2>Contact Us</h2><p>Feel free to reach out to us!</p>';
  //     break;
  //   default:
  //     console.error('Invalid page:', page);
  // }
}
