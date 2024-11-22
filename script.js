// Error elements
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

// Validate Name
function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required.';
        return false;
    }
    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Please enter your first and last name separated by a space.';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Validate Phone Number
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required.';
        return false;
    }
    if (!phone.match(/^\+?[0-9]{10,15}$/)) {
        phoneError.innerHTML = 'Please enter a valid phone number (10-15 digits, optionally starting with +).';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Validate Email
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required.';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Validate Message
function validateMessage() {
    var message = document.getElementById('contact-message').value;

    if (message.length === 0) {
        messageError.innerHTML = 'Message is required.';
        return false;
    }
    if (message.length < 10) {
        messageError.innerHTML = 'Message must be at least 10 characters long.';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// Validate Form on Submit
function validateForm() {
    var isValidName = validateName();
    var isValidPhone = validatePhone();
    var isValidEmail = validateEmail();
    var isValidMessage = validateMessage();

    if (!isValidName || !isValidPhone || !isValidEmail || !isValidMessage) {
        submitError.innerHTML = 'Please fix errors to submit the form.';
        return false;
    }

    submitError.innerHTML = '<i class="fas fa-check-circle"></i> Form is valid!';
    alert('Form submitted successfully!');
    return true; // For demonstration; replace with actual submission logic.
}
