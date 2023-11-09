// Inside projectFormHandler.js in the utils folder
// projectFormHandler.js
export const projectArray = [];

export function attachCreateProjectEvent() {
  //Now that we have rendered our HTML component, we can target it by its ID or class. In this case, I've targeted the 'Create project' button.
  const createProjectButton = document.querySelector(".btn-success");

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
    console.log(projectArray);

    // Clear the form fields by resetting the form
    document.querySelector("form").reset();
  });

  return projectArray;
}
