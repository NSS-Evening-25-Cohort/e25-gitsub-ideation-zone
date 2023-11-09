import { renderToDom } from "../utils/renderToDom.js";
import { newProjectForm } from "../components/new_projects_form.js";

const Profile = document.querySelector("#Profile");

const bottomDiv = "#bottomBox";
// hi again
Profile.innerHTML = `
<img
id="pfp"
src="https://cdn.vox-cdn.com/thumbor/S7APkbn99b1oVsds_1JBhvdzsWU=/0x0:2000x1000/1400x1400/filters:focal(814x298:815x299)/cdn.vox-cdn.com/uploads/chorus_asset/file/10440907/Thanos_MCU.jpg"
alt="picture of thanos"
/>
<h1 id="Name">Thanos</h1>
<h3 id="username">lostboi</h3>
<div id="opening">Building tech to elevate people.
Founder of React Ladies a community
for React JS developers.</div>
<div id="buttons" >
<button><img id="buttonimg" src="Images/followbutton.png" alt=""></button>
<button><img id="buttonimg" src="Images/sponsorbutton.png" alt=""></button>
<button>...</button>
</div>`;

// body.appendChild(Profile);

renderToDom(bottomDiv, newProjectForm);

document.querySelector("#bottomBox").innerHTML = newProjectForm;
