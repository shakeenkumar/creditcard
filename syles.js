function validateForm() {
    const cardNumber = document.getElementById("card-number").value;
    const cardHolder = document.getElementById("card-holder").value;
    const expMonth = document.getElementById("exp-month").value;
    const expYear = document.getElementById("exp-year").value;
    const cvc = document.getElementById("cvc").value;
  
    // Regex for validation
    const cardNumberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    const cardHolderRegex = /^[A-Za-z\s]+$/;
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    const yearRegex = /^\d{2}$/;
    const cvcRegex = /^\d{3}$/;
  
    // Validation checks
    if (!cardNumberRegex.test(cardNumber)) {
      alert("Please enter a valid card number (format: 1234 5678 9101 1020)");
      return false;
    }
    if (!cardHolderRegex.test(cardHolder)) {
      alert("Please enter a valid card holder name (only letters and spaces allowed)");
      return false;
    }
    if (!monthRegex.test(expMonth)) {
      alert("Please enter a valid expiration month (MM format: 01-12)");
      return false;
    }
    if (!yearRegex.test(expYear)) {
      alert("Please enter a valid expiration year (YY format)");
      return false;
    }
    if (!cvcRegex.test(cvc)) {
      alert("Please enter a valid CVC/CVV (3 digits)");
      return false;
    }
  
    alert("Payment information is valid!");
    return true;
  }
  