import { navClickFunction } from "/navbar.js";
import { repos } from "/data.js";



const bottomOverviewString = 

`    <div>
<div class="container mt-5">
  <div class="bg-dark text-light p-5">
    <h2>Create a Pinned Repo</h2>
    <p class="text-secondary">
      Coordinate, track, and update your work in one place, so projects stay
      transparent and on schedule.
    </p>
    <hr class="text-secondary" />
    <form>
      <div class="repoName">
        <label for="projectName" class="form-label">
          Project board name
        </label>
        <input
          type="text"
          class="form-control"
          id="projectName"
          placeholder="Example 2"
        />
      </div>
      <div class="repoDescription">
        <label for="projectDescription" class="form-label">
          Description (optional)
        </label>
        <textarea
          class="form-control"
          id="projectDescription"
          rows="3"
          placeholder="Visit Github to see how they do this"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">
        Create project
      </button>
    </form>
  </div>
</div>
</div>`

const topOverviewString = 
`
    <div class="container mt-5">
      <div class="bg-dark text-light p-5">
    <div class="repo-card">
        <div class="repo-header">
            <h3>${repos.name}</h3>
            <a href="https://github.com/yourusername/repo-name" class="repo-link">View on GitHub</a>
        </div>
        <p>Repository description goes here. This is a sample description of the pinned repository.</p>
        <div class="repo-stats">
            <span>type</span>
            <span>Stars: 100</span>
            <span>Forks: 50</span>
        </div>
    </div>
      </div>
    </div>
  </div>
    `

    navClickFunction(topOverviewString, bottomOverviewString);

    form.addEventListener('submit',  (event) => {
  event.preventDefault()
  
    const newPinnedRepo ={
      id: repos.length +1,
      name: document.querySelector("#repoName").value,
      description: document.querySelector("#repoDescription").value,
      script: document.querySelector('input[name="type"]:checked').id,
      stars:  Math.floor(Math.random() * (999 - 100) ) + 100,
      forks:  Math.floor(Math.random() * (999 - 100) ) + 100
    }

    repos.push(newPinnedRepo)
    renderToDom(repos)
    form.reset()

  })
