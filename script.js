// Add comments
// Author:Christopher Yao Yixin
// Description: This script handles basic navigation and form submissions.

// Simplified form submission processing example
document.addEventListener('DOMContentLoaded', function() {
    // Assuming there is a registration form
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // You can add Ajax requests to send to the server here
        alert('Registration successful, about to jump to login page');
        window.location.href = 'login.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const users = []; // User data should be obtained from the server, and this is only for simulation

    // Simulate user data and adjust it to non email format according to your description
    users.push({ username: '1', password: '1' });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('email').value; // Assuming you still use the 'email' field to enter your username
        const password = document.getElementById('password').value;

        // Simplify verification logic and directly compare input values with simulated data
        const matchedUser = users.find(user => user.username === username && user.password === password);

        if (matchedUser) {
            loginMessage.textContent = 'Login successful！';
            setTimeout(() => {
                window.location.href = 'shop.html'; // Login successful, redirect to shopping page
            }, 1500);
        } else {
            loginMessage.textContent = 'Login failed, please check your username and password';
            setTimeout(() => {
                window.location.href = 'register.html'; // Login failed, redirect to registration page
            }, 1500);
        }
    });
});
function processCheckout() {
    // Obtain the number of user selections
    var quantity = document.querySelector('#quantity').value;
    // Obtain the product price selected by the user
    var selectedOption = document.querySelector('#productSelect option:checked');
    var priceText = selectedOption.text.split(' - ')[1]; // Assuming the price is the second part of the option text
    var price = parseFloat(priceText.replace('$', '').trim()); // 假设价格是期权文本的第二部分
    
    // Calculate total price
    var total = quantity * price;
    
    // Update order details display
    document.querySelector('#orderSummary').innerText = `quantity: ${quantity}，product: ${selectedOption.value}，Total price: $${total.toFixed(2)}`;
    document.querySelector('#totalOrder').style.display = 'block';
}