// Select the "Repositories" link
const repositoriesLink = document.querySelector('#repositories');
const overviewLink = document.querySelector('.active');

// Select the topBox element where you want to send the content
const topBox = document.getElementById('topBox');

// Add an event listener to the "Repositories" link to handle the click
repositoriesLink.addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Replace the content of the topBox with the desired content or HTML
    topBox.innerHTML = `
        <h2>This is the Repositories Section</h2>
        <p>You can add your repository content here.</p>
        <!-- Include any other content you want to display -->
    `;

    // Add or remove active class for highlighting the link
    repositoriesLink.classList.add('active');
    overviewLink.classList.remove('active');
});
