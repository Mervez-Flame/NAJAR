const navToggle = document.querySelector('#nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    document.getElementById('success-message').style.display = 'block'; // Show the success message
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('popup-modal');
    var closeButton = document.querySelector('.close-button');

    // Show the modal
    modal.style.display = 'flex';

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
