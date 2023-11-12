export const newProjectForm = () => {`<div>
  <div class="projectform container mt-5">
    <div class="bg-dark text-light p-5">
      <h2>Create a new project</h2>
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
            placeholder="description"
          ></textarea>
        </div>
        <button type="submit" class="submitproject btn btn-success">
          Create project
        </button>
      </form>
    </div>
  </div>
</div>`
};
