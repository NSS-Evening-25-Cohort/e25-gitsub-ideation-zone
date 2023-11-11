export const addNewProjects = (newProject) => {
  return `<div class="container mt-3">
  <div class="card">
    
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${newProject.name}</h5>
          <small class="text-muted">Updated 44 seconds ago</small>
        </div>
        <p class="mb-1">Private</p>
        <small class="text-muted">${newProject.description}</small>
      </li>
      
    </ul>
  </div>
</div>`;
};
