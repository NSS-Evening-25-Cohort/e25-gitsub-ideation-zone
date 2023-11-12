import { renderToDom } from "../utils/renderToDom.js";
import { newProjectForm } from "../components/new_projects_form.js";

const topDiv = "#topBox";
const bottomDiv = "#bottomBox";

document.querySelector(".navbar").addEventListener("click", (e) => {
  console.log("Clicked element:", e.target);
  if (e.target.classList.contains("projects")) {
    console.log("Project link clicked");
    renderToDom(bottomDiv, newProjectForm);
  } else {
    console.log("Other link in navbar clicked");
  }
});
