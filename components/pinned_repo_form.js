const pinnedRepoForm = `<div id="pinnedRepoForm" class="container mt-5" style="max-width: 841px;">
<div class="bg-dark text-light p-5">
  <form>
  <select class="form-select" aria-label="Default select example">
<option selected>Choose Repo to Pin</option>
<option value="1">${repos.name}</option>
<option value="2">${repos.name}</option>
<option value="3">${repos.name}</option>
</select>
    <button type="submit" class="btn btn-success">
      Pin Repository
    </button>
  </form>
</div>
</div>`
