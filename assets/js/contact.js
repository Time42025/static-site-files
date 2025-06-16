function sendDetails() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you would typically send the data to a server
        console.log({ name, email, message });
    } else {
        alert('Please fill in all fields.');
    }

    // Pack into an object with JSON format
    const contactDetails = {
        name: name,
        email: email,
        message: message
    };

    // Send to API 
    // Template API Call
    fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactDetails)
    });
    // Clear the form
    document.getElementById('contact-form').reset();
};


// Add event listener to the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    sendDetails(); // Call the function to send details
});