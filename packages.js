//To DO Create a Form to store two values used to make new Package Cards
import { renderToDom } from "../utils/renderToDom";

const packages = [
  {
    id : 1,
    title : "Apache",
    desc : "This is a description"
  },
  {
    id : 2,
    title : "Sioux",
    desc : "This is another description"
  },
  {
    id : 3,
    title : "Iroqious",
    desc : "This is yet another description"
  },
];

const packagesPage = document.querySelector("#repositories");
const overviewLink = document.querySelector(".active");

const topBox = "#topBox";
const bottomBox = "#bottomBox";

const renderPackages = (packages) => {
  let domString = "";

    for (const packageArray of packages) {
      domString += ` <div class = "package-card-container">
      <div class="card">
      <h2>Title</h2>
      <p>Description goes here...</p>
      <button onclick="buttonClick()">Learn More</button>
      </div>
    </div>`;

    renderToDom(topBox, domString);
  }
}


const renderPackagesForm = () => {
const packagesForm = `<div>
<div class="packageform container mt-5">
  <div class="bg-dark text-light p-5">
    <h2>Create a new Package</h2>
    <p class="text-secondary">
    Manage private or public packages next to your source code.
    </p>
    <hr class="text-secondary" />
    <form>
      <div class="mb-3">
        <label for="packageName" class="form-label">
          Package Name
        </label>
        <input
          type="text"
          class="form-control"
          id="projectName"
          placeholder="Example 2"
        />
      </div>
      <div class="mb-3">
        <label for="packageDescription" class="form-label">
          Description (optional)
        </label>
        <textarea
          class="form-control"
          id="packageDescription"
          rows="3"
          placeholder="description"
        ></textarea>
      </div>
      <button type="submit" class="submitproject btn btn-success">
        Create New Package
      </button>
    </form>
  </div>
</div>
</div>`;

renderToDom(bottomBox, packagesForm);
}
