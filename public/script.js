// Redirect to login or signup page
const redirectDelay = 3000; // 3 seconds delay for auto-transition

const getStartedButton = document.getElementById('get-started-btn');

if (getStartedButton) {
    getStartedButton.addEventListener('click', () => {
        window.location.href = '/login'; // Adjust to your login route
    });

    // Auto-redirect after delay
    setTimeout(() => {
        window.location.href = '/login';
    }, redirectDelay);
}