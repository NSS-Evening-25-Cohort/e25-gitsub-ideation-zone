import { renderToDom } from "../utils/renderToDom.js";
import { newProjectForm } from "../components/new_projects_form.js";
import { attachCreateProjectEvent } from "./utils/projectFormHandler.js";
import { renderOverview } from "/overview.js";

const topDiv = "#topBox";
const bottomDiv = "#bottomBox";

document.querySelector(".navbar").addEventListener("click", (e) => {
  console.log("Clicked element:", e.target);
  if (e.target.classList.contains("projects")) {
    console.log("Project link clicked");
    renderToDom(topDiv, "");
    renderToDom(bottomDiv, newProjectForm);
    attachCreateProjectEvent();
    // next if statement
  } else if (e.target.classList.contains("overview")) {
    console.log("overview navbar clicked");
    renderOverview();
  }  else if (e.target.classList.contains("packages")) {
    console.log("packages navbar clicked");
   //add render function here
  } else if (e.target.classList.contains("repositories")) {
  console.log("repositories navbar clicked");
  //add render funtion here
}
});
