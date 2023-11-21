export const addNewProjects = (newProject) => {
  return `<div class="container mt-3">
  <div class="card bg-dark text-light">
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-dark text-light">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${newProject.name}</h5>
          <small>Updated 44 seconds ago</small>
        </div>
        <p class="mb-1 project-status">Private</p>
        <small>${newProject.description}</small>
      </li>
    </ul>
  </div>
</div>`;
};
