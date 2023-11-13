import { renderToDom } from "../utils/renderToDom.js";
import { newProjectForm } from "../components/new_projects_form.js";
// Inside main.js in the script folder
import {
  projectArray,
  attachCreateProjectEvent,
} from "../utils/projectFormHandler.js";
import { renderOverview } from "/overview.js";

const Profile = document.querySelector("#Profile");

const bottomDiv = "#bottomBox";

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
</div>
<div>
<img
  id="icons"
  src="Images/followersicon.png"
  alt="image of follower icon"
/>
1.8k followers ·27 following
<img id="icons" src="Images/staricon.png" alt="star icon" />329
</div>
<div>
<h2 id="socials">
  <img id="icons" src="Images/location icon.png" alt="" />New York, New
  York
</h2>
<h2 id="socials"><img id="icons" src="Images/mailicon.png" alt="">thanos@lostboi.com</h2>
<h2 id="socials"><img id="icons" src="Images/twittericon.png" alt="">@l0stboi</h2>
<div  id="breakline"></div>
</div>
<div id="highlights">Highlights
<h2 id="socials"><img id="icon
  " src="Images/star2icon.png" alt=""> Artic code Vauilt Contributor</h2>
<h2 id="socials"> <img id="icon
  " src="Images/star3 icon.png" alt="">Github</h2></div>
  <img
  src="Images/star pro.png" alt=""></h2>
<div  id="breakline"></div>
<div >Organazations </br><img id="organazations" src="Images/orgs.png" alt="">


</div>
<div  id="breakline"></div>
<div >Sponsors </br>
<img id="sponsors" src="Images/sponsorss.png" alt="">
</div>
`;

//body.appendChild(Profile);

renderOverview()

//  Now you can call the function to attach the event
// attachCreateProjectEvent();
// const overviewLink = document.querySelector("#overview")
// console.log("#overview", overviewLink)
// if (overviewLink)
