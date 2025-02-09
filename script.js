document.addEventListener("DOMContentLoaded", () => {
    const cardNumberInput = document.getElementById("card-number");
    const expiryMMInput = document.getElementById("expiry-mm");
    const expiryYYInput = document.getElementById("expiry-yy");
    const cvvInput = document.getElementById("cvv");
    const form = document.getElementById("credit-card-form");

    // Format card number input as user types
    cardNumberInput.addEventListener("input", (e) => {
        e.target.value = e.target.value
            .replace(/\D/g, "") // Remove all non-digits
            .replace(/(.{4})/g, "$1 ") // Insert space every 4 digits
            .trim(); // Remove trailing space
    });

    // Ensure MM is max 2 digits and a valid month
    expiryMMInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 2);
        if (parseInt(e.target.value) > 12) e.target.value = "12";
    });

    // Ensure YY is max 2 digits
    expiryYYInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 2);
    });

    // Ensure CVV is 3 digits only
    cvvInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
    });

    // Form validation on submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const cardNumber = cardNumberInput.value.replace(/\s/g, ""); // Remove spaces
        const expiryMM = expiryMMInput.value;
        const expiryYY = expiryYYInput.value;
        const cvv = cvvInput.value;

        // Simple validation for card details
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert("Invalid Card Number. Must be 16 digits.");
            return;
        }
        if (expiryMM.length !== 2 || expiryYY.length !== 2) {
            alert("Invalid Expiration Date.");
            return;
        }
        if (cvv.length !== 3) {
            alert("Invalid CVV.");
            return;
        }

        alert("Payment submitted successfully!");
    });
});
