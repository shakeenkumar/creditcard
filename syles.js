document.getElementById('submit-btn').addEventListener('click', function() {
    const cardNumber = document.getElementById('card-number').value;
    const expMonth = document.getElementById('exp-month').value;
    const expYear = document.getElementById('exp-year').value;
    const cvc = document.getElementById('cvc').value;

    if (!validateCardNumber(cardNumber)) {
        alert("Invalid card number! Must be 16 digits.");
        return;
    }

    if (!validateExpiration(expMonth, expYear)) {
        alert("Invalid expiration date!");
        return;
    }

    if (!validateCVC(cvc)) {
        alert("Invalid CVC! Must be 3 digits.");
        return;
    }

    alert("Payment successful!");
});

function validateCardNumber(number) {
    return /^\d{4} \d{4} \d{4} \d{4}$/.test(number);
}

function validateExpiration(month, year) {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    return (
        /^\d{2}$/.test(month) && /^\d{2}$/.test(year) &&
        month >= 1 && month <= 12 &&
        (year > currentYear || (year == currentYear && month >= currentMonth))
    );
}

function validateCVC(cvc) {
    return /^\d{3}$/.test(cvc);
}
