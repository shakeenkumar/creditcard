document.getElementById("submit-btn").addEventListener("click", function() {
    let cardNumber = document.getElementById("card-number").value.replace(/\s/g, '');
    let expMonth = document.getElementById("exp-month").value;
    let expYear = document.getElementById("exp-year").value;
    let currentYear = new Date().getFullYear() % 100;
    let currentMonth = new Date().getMonth() + 1;

    // Validate card number (must be 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Invalid card number! It must be 16 digits.");
        return;
    }

    // Validate expiration date
    if (expYear < currentYear || (expYear == currentYear && expMonth < currentMonth)) {
        alert("Expired card! Please enter a valid date.");
        return;
    }

    alert("Payment successful!");
});
