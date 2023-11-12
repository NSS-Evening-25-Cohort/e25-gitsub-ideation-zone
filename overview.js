// // import { navClickFunction } from "/navbar.js";
// import { repos } from "/data.js";
// // import { renderToDom } from "../utils/renderToDom.js";

// const form = document.querySelector("#overviewForm")

// // const renderToTop = (array) => {

// //   let domString = ""

// // array.map((object, index) => {
// //   domString +=
// // `
// //     <div id="pinnedRepoCard" class="container mt-5">
// //       <div class="bg-dark text-light p-5">
// //     <div class="repo-card">
// //         <div class="repo-header">
// //             <h3>${object.name}</h3>
// //             <a href="https://github.com/yourusername/repo-name" class="repo-link">View on GitHub</a>
// //         </div>
// //         <p>Repository description goes here. This is a sample description of the pinned repository.</p>
// //         <div class="repo-stats">
// //             <span>type</span>
// //             <span>Stars: 100</span>
// //             <span>Forks: 50</span>
// //             <button type ="button" class="btn btn-danger" id="delete--${index}" >delete</button>
// //         </div>
// //     </div>
// //       </div>
// //     </div>
// //   </div>
// //     `})
// //     topBox.innerHTML = domString
// // }

// // form.addEventListener('submit',  (event) => {
// //   event.preventDefault()
// //   console.log('clicked')
// //     const newPinnedRepo ={
// //       id: repos.length +1,
// //       name: document.querySelector("#projectName").value,
// //       description: document.querySelector("#projectDescription").value,
// //       script: document.querySelector('input[name="type"]:checked').id,
// //       stars:  Math.floor(Math.random() * (999 - 100) ) + 100,
// //       forks:  Math.floor(Math.random() * (999 - 100) ) + 100
// //     }

// //     repos.push(newPinnedRepo)
// //     renderToTop(repos)
// //     form.reset()

// // //   })
// // const navClickFunction = (topDomString, bottomDomString) => {

// const renderedArray = () => {
//   let domString = ""

// repos.map((object, index) => {
//   domString +=
// `
//     <div id="pinnedRepoCard" class="card mt-5" style="max-width: 405px;">
//       <div class="bg-dark text-light p-5">
//     <div class="repo-card">
//         <div class="repo-header">
//             <h3>${object.name}</h3>
//             <a href="https://github.com/yourusername/repo-name" class="repo-link">View on GitHub</a>
//         </div>
//         <p>${object.description}</p>
//         <div class="repo-stats">
//             <span>type</span>
//             <span>${object.stars}</span>
//             <span>${object.forks}</span>
//             <button type ="button" class="btn btn-danger" id="delete--${index}" >delete</button>
//         </div>
//     </div>
//       </div>
//     </div>
//   </div>
//     `})
//     topOverviewBox.innerHTML = domString
//     renderedArray(repos)
// }

// const overviewLink = document.querySelector('#overview');
// const repositoriesLink = document.querySelector('#Repositories');
// const projectsLink = document.querySelector('#projects');
// const packagesLink = document.querySelector('#packages');
// // const clickedLink = document.querySelectorAll("#navbarButtons")

// const topOverviewBox = document.querySelector('#topBox');
// const bottomOverviewBox = document.querySelector('#bottomBox');

// overviewLink.addEventListener('click', (e) => {

// e.preventDefault()

// bottomOverviewBox.innerHTML =
// `<div id="pinnedRepoForm" class="container mt-5" style="max-width: 841px;">
//   <div class="bg-dark text-light p-5">
//     <form>
//     <select class="form-select" aria-label="Default select example">
//   <option selected>Choose Repo to Pin</option>
//   <option value="1">${repos.name}</option>
//   <option value="2">${repos.name}</option>
//   <option value="3">${repos.name}</option>
// </select>
//       <button type="submit" class="btn btn-success">
//         Pin Repository
//       </button>
//     </form>
//   </div>
// </div>`
// ;

// topOverviewBox.innerHTML = renderedArray(repos);

// repositoriesLink.classList.remove('active');
// packagesLink.classList.remove('active');
// clickedLink.classList.remove('active');
// overviewLink.classList.add('active');

// })

// ;

// // navClickFunction(topOverviewString, bottomOverviewString);
