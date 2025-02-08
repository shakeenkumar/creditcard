document.addEventListener("DOMContentLoaded", () => {
    const cardNumberInput = document.getElementById("card-number");
    const expiryMMInput = document.getElementById("expiry-mm");
    const expiryYYInput = document.getElementById("expiry-yy");
    const cvvInput = document.getElementById("cvv");

    // Format card number input as user types
    cardNumberInput.addEventListener("input", (e) => {
        e.target.value = e.target.value
            .replace(/\D/g, "")                 // Remove all non-digits
            .replace(/(.{4})/g, "$1 ")          // Insert space every 4 digits
            .trim();                            // Remove trailing space
    });

    // Ensure MM is max 2 digits and valid month
    expiryMMInput.addEventListener("input", (e) => {
        e.target.value = e.target.value
            .replace(/\D/g, "")                 // Remove non-digits
            .substring(0, 2);                   // Limit to 2 digits
    });

    // Ensure YY is max 2 digits
    expiryYYInput.addEventListener("input", (e) => {
        e.target.value = e.target.value
            .replace(/\D/g, "")                 // Remove non-digits
            .substring(0, 2);                   // Limit to 2 digits
    });

    // Ensure CVV is 3 digits only
    cvvInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
    });
});