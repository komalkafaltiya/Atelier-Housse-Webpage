
document.addEventListener("DOMContentLoaded", function() {
    // Select all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');
        });
    });
});     

function showContent(contentNumber) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach((content) => {
        content.classList.remove('active');
    });
    // Show the selected content section
    document.getElementById(`content${contentNumber}`).classList.add('active');
}