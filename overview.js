
export const bottomDomString = `    <div>
<div class="container mt-5">
  <div class="bg-dark text-light p-5">
    <h2>Create a Pinned Repo</h2>
    <p class="text-secondary">
      Coordinate, track, and update your work in one place, so projects stay
      transparent and on schedule.
    </p>
    <hr class="text-secondary" />
    <form>
      <div class="mb-3">
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
      <div class="mb-3">
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

export const topDomString= `
    <div class="container mt-5">
      <div class="bg-dark text-light p-5">
    <div class="repo-card">
        <div class="repo-header">
            <h3>Repository Name</h3>
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
