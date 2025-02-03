const redirectDelay = 3000;

// Redirect to Login/Signup page after the delay
setTimeout(() => {
    window.location.href = '/auth'; // Adjust '/auth' to your actual login/signup route
}, redirectDelay);