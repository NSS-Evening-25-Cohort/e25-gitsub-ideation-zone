import { renderToDom } from "../utils/renderToDom.js";
import { newProjectForm } from "../components/new_projects_form.js";
import { attachCreateProjectEvent } from "./utils/projectFormHandler.js";

const topDiv = "#topBox";
const bottomDiv = "#bottomBox";

document.querySelector(".navbar").addEventListener("click", (e) => {
  console.log("Clicked element:", e.target);
  if (e.target.classList.contains("projects")) {
    console.log("Project link clicked");
    renderToDom(bottomDiv, newProjectForm);
    attachCreateProjectEvent();
    // next if statement
  } else {
    console.log("Other link in navbar clicked");
  }
});
