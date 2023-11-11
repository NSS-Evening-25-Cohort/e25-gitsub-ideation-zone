import { renderToDom } from "../utils/renderToDom.js";

const repos = [
  {
    reponame: "greys-anatomy-lorem-ipsum-generator",
    description:
      "A lorem ipsum generator with medical terms and words from the show Greys Anatomy.",
    language: "JavaScript",
  },
  {
    reponame: "how-many-days-until",
    description: "A React countdown app of days between today and next year.",
    language: "JavaScript",
  },
  {
    reponame: "httriri",
    description: "HTTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFs",
    language: "JavaScript",
  },
  {
    reponame: "ambition-fund-website",
    description:
      "Website for www.ambitionfund.org, micro-grant program to provide support for underrepresented people who need financial assistance pursuing",
    language: "JavaScript",
  },
];


const repositoriespage = document.querySelector("#Repositories");
const overviewLink = document.querySelector(".active");

 
const topBox = document.getElementById("topBox");

 
repositoriespage.addEventListener("click", function (event) {
 
  event.preventDefault();

 
  let domstring = "";

  for (const repo of repos) {
    domstring += `
      <div class="card" style="width: 29rem;background-color: rgb(13,17,23);color:rgb(139,148,158); border-bottom: solid  rgb(33,39,44);">
        <div class="card-body">
          <a href="">${repo.reponame}</a>
          <p class="card-text">${repo.description}</p>
        </div>
      </div>`;
  }

  topBox.innerHTML = domstring;

   repositoriespage.classList.add("active");
  overviewLink.classList.remove("active");
});

const bottombox = document.querySelector("#bottomBox");

repositoriespage.addEventListener("click", function (event) {
  event.preventDefault();
  bottombox.innerHTML = `
    <form id="repoForm">
      <div class="mb-3" >
        <label for="repo name" class="form-label">Create a new repository</label>
        <input type="text" class="form-control" id="reponame" aria-describedby="textHelp" placeholder=" ">
      </div>
      <div class="mb-3">
        <label for="Descriptions" class="form-label">Description</label>
        <input type="text" class="form-control" id="descriptionrepo" placeholder=" ">
      </div>
      <button type="submit" class="btn btn-success" style="margin-top:10px;">Create repository</button>
    </form>`;

  const form = document.getElementById("repoForm");

  form.addEventListener("submit", createrepo);
});

const createrepo = (e) => {
  e.preventDefault();

  const newrepo = {
    reponame: document.getElementById("reponame").value,
    description: document.getElementById("descriptionrepo").value,
  };

  repos.push(newrepo);

  let domstring = "";

  for (const repo of repos) {
    domstring += `
      <div class="card" style="width: 29rem;background-color: rgb(13,17,23);color:rgb(139,148,158); border-bottom: solid  rgb(33,39,44);">
        <div class="card-body">
          <a href="">${repo.reponame}</a>
          <p class="card-text">${repo.description}</p>
        </div>
      </div>`;
  }

  topBox.innerHTML = domstring;
  form.reset();
};