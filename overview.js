
import { repos } from "/data.js";

const form = document.querySelector("#overviewForm")

const topOverviewBox = document.querySelector('#topBox');
const bottomOverviewBox = document.querySelector('#bottomBox');
const overviewLink = document.querySelector('#overview');
const otherLink = document.querySelector('#repositories',"#packages","#projects");
let allRepos = repos


    
    overviewLink.addEventListener('click', (e) => {
        e.preventDefault();
        overviewLink.classList.add("active");
        renderOverview();
    });

export const renderOverview = () => {
  let pinnedRepos = allRepos.filter((repo) => repo.isPinned === true)
  let unPinnedRepos = allRepos.filter(repo => repo.isPinned === false);
  let options = unPinnedRepos.map(repo => `<option value=${repo.id}>${repo.name}</option>`)

    bottomOverviewBox.innerHTML = `
        <div id="pinnedRepoForm" class="container mt-5" style="max-width: 841px;">
            <div class="bg-dark text-light p-5">
                <form id="repoToPinForm">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Choose Repo to Pin</option>
                        ${options}
                    </select>
                    <button type="submit" class="btn btn-success">Pin Repository</button>
                </form>
            </div>
        </div>`;
  
    topOverviewBox.innerHTML = '';
    pinnedRepos.map((repo) => {
        topOverviewBox.innerHTML += `
            <div class="card" style="width: 29rem; background-color: rgb(13,17,23); color:rgb(139,148,158); border-bottom: solid rgb(33,39,44);">
                <div class="card-body">
                    <a href="">${repo.name}</a>
                    <p class="card-text">${repo.description}</p>
                    <div class="repo-stats">
                        <span>${repo.script}</span>
                        <span>Stars: ${repo.stars}</span>
                        <span>Forks: ${repo.forks}</span>
                        <button type="button" class="btn btn-danger" id="delete--${repo.id}">delete</button>
                    </div>
                </div>
            </div>`;
    });

    const pinForm = document.querySelector("#repoToPinForm");

    pinForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const selectedPinId = document.querySelector('.form-select');
      console.log('selectedPinId', selectedPinId.value)
      const findRepo = allRepos.find((repo) => repo.id.toString() === selectedPinId.value)
      console.log('findRepo', findRepo)
      findRepo.isPinned = true;
      console.log(findRepo.isPinned)
      renderOverview(); 
    });
}

overviewLink.classList.add("active");
otherLink.classList.remove("active");
