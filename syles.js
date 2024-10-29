document.addEventListener("DOMContentLoaded", () => {
  const cardNumberInput = document.getElementById("card-number");
  const expiryDateInput = document.getElementById("expiry-date");
  const cvvInput = document.getElementById("cvv");

  // Format card number input as user types
  cardNumberInput.addEventListener("input", (e) => {
      e.target.value = e.target.value
          .replace(/\D/g, "")                 // Remove all non-digits
          .replace(/(.{4})/g, "$1 ")          // Insert space every 4 digits
          .trim();                            // Remove trailing space
  });

  // Format expiry date as MM/YY
  expiryDateInput.addEventListener("input", (e) => {
      e.target.value = e.target.value
          .replace(/\D/g, "")                 // Remove non-digits
          .replace(/^(\d{2})(\d)/, "$1/$2")   // Add slash after MM
          .substring(0, 5);                   // Limit to MM/YY
  });

  // Ensure CVV is 3 digits only
  cvvInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").substring(0, 3);
  });
});
