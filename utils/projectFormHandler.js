import { renderToDom } from "./renderToDom.js";
import { addNewProjects } from "../components/projects_cards.js";

// Inside projectFormHandler.js in the utils folder
// projectFormHandler.js
export const projectArray = [];

export function attachCreateProjectEvent() {
  //Now that we have rendered our HTML component, we can target it by its ID or class. In this case, I've targeted the 'Create project' button.

  const createProjectButton = document.querySelector(".btn-success");
  const topDivId = "#topBox";
  let refStuff = "";

  createProjectButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Get the values from the form fields
    let projectName = document.querySelector("#projectName").value;
    let projectDescription = document.querySelector(
      "#projectDescription"
    ).value;
    if (projectDescription === "") {
      projectDescription = "no description";
    }

    let ProjectObject = {
      name: projectName,
      description: projectDescription,
    };
    projectArray.push(ProjectObject);

    // Clear the form fields by resetting the form
    document.querySelector("form").reset();
    console.log(projectArray);
    // renderToDom(topDivId, projectsCards);
    // const renderCards = (array) => {
    refStuff = `<div class="container mt-3">
    <div class="card bg-dark text-light">
      <div class="card-header bg-dark">
        <div class="row">
          <div class="col">
            <input
              type="text" id="searchbar"
              class="searchbar form-control"
              placeholder="Search all projects"
              style="color: white; background-color: black;"
            />
          </div>
          <div class="col-auto">
            <a href="#" class="btn btn-link text-light">
              
            </a> 
            <a href="#" class="btn btn-link text-light">
              
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

    projectArray.forEach((item) => {
      refStuff += addNewProjects(item);
    });
    renderToDom(topDivId, refStuff);
    reinitializeEventListeners();
    toggleProjectStatus();
  });
  return refStuff;
  return projectArray;
}

function filterProjects(searchInputValue) {
  return projectArray.filter(
    (project) =>
      project.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      project.description.toLowerCase().includes(searchInputValue.toLowerCase())
  );
}

// Event listener initialization function
function initializeSearchBarEventListener() {
  const searchInput = document.querySelector("#searchbar");
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      e.preventDefault();
      const searchInputValue = searchInput.value;
      if (searchInputValue === "") {
        renderAllProjects(); // Function to render all projects
      } else {
        const filteredProjects = filterProjects(searchInputValue);
        updateDisplay(filteredProjects); // Function to update display with filtered projects
      }
    });
  }
}

function updateDisplay(filteredProjects) {
  let displayContent = `<div class="container mt-3">
  <div class="card bg-dark text-light">
    <div class="card-header bg-dark">
      <div class="row">
        <div class="col">
          <input
            type="text" id="searchbar"
            class="searchbar form-control"
            placeholder="Search all projects"
            style="color: white; background-color: black;"
          />
        </div>
        <div class="col-auto">
          <a href="#" class="btn btn-link text-light">
            </a> 
          <a href="#" class="btn btn-link text-light">
            </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  filteredProjects.forEach((project) => {
    displayContent += addNewProjects(project);
  });

  renderToDom("#topBox", displayContent);
  reinitializeEventListeners();
  toggleProjectStatus();
}

function renderAllProjects() {
  let allProjectsContent = `<div class="container mt-3">
  <div class="card bg-dark text-light">
    <div class="card-header bg-dark">
      <div class="row">
        <div class="col">
          <input
            type="text" id="searchbar"
            class="searchbar form-control"
            placeholder="Search all projects"
            style="color: white; background-color: black;"
          />
        </div>
        <div class="col-auto">
          <a href="#" class="btn btn-link text-light">
            </a> 
          <a href="#" class="btn btn-link text-light">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  projectArray.forEach((project) => {
    allProjectsContent += addNewProjects(project);
  });
  renderToDom("#topBox", allProjectsContent);
  reinitializeEventListeners();
  toggleProjectStatus();
}

function reinitializeEventListeners() {
  initializeSearchBarEventListener();
}

function toggleProjectStatus() {
  // Attach event listener to each project status element
  document.querySelectorAll(".project-status").forEach((element) => {
    element.addEventListener("click", function (event) {
      if (event.target.innerHTML === "Private") {
        event.target.innerHTML = "Public";
      } else {
        event.target.innerHTML = "Private";
      }
    });
  });
}
