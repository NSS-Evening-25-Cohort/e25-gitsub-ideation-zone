
import { renderToDom } from "../utils/renderToDom.js";
import { newProjectForm } from "../components/new_projects_form.js";
import { pinnedRepoForm } from "../components/pinned_repo_form.js";

renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};


const topDiv = document.querySelector('#topBox');
const bottomDiv = document.querySelector('#bottomBox');

document.querySelector('.navbar').addEventListener('click', (e) => {
  if (e.target.id.includes('overview')) { 
    renderToDom('#topBox', newProjectForm); 
    renderToDom('#bottomBox', pinnedRepoForm);
    console.log("overview clicked")
  } else if (e.target.classList.contains('repositories')) {
    renderToDom(topDiv, newProjectForm); 
    renderToDom(bottomDiv, newProjectForm);
  } else if (e.target.classList.contains('project')) {
    renderToDom(topDiv, newProjectForm);
    renderToDom(bottomDiv, newProjectForm);
  } else if (e.target.classList.contains('packages')) {
    renderToDom(topDiv, newProjectForm);
    renderToDom(bottomDiv, newProjectForm);
  }
  console.log("got clicked")
});
