import { renderToDom } from "./renderToDom.js";
import { addNewProjects } from "../components/projects_cards.js";

// Inside projectFormHandler.js in the utils folder
// projectFormHandler.js
export const projectArray = [];

export function attachCreateProjectEvent() {
  //Now that we have rendered our HTML component, we can target it by its ID or class. In this case, I've targeted the 'Create project' button.

  const createProjectButton = document.querySelector(".btn-success");
  const topDivId = "#topBox";

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
    let refStuff = `<div class="container mt-3">
    <div class="card bg-dark text-light">
      <div class="card-header bg-dark">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Search all projects"
              style="color: white; background-color: black;"
            />
          </div>
          <div class="col-auto">
            <a href="#" class="btn btn-link text-light">
              3 Open
            </a> /
            <a href="#" class="btn btn-link text-light">
              0 Closed
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
    // }
  });

  return projectArray;
}
