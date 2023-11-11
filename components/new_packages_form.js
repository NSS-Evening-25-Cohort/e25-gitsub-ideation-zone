export const newPackageForm = `<div>
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
