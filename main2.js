$(document).ready(function () {
    // Apply mask to the card number input
    $('#card-number').mask('0000 0000 0000 0000', { placeholder: '____ ____ ____ ____' });

    // Apply mask to the expiry date input
    $('#expiry-date').mask('00/00', { placeholder: 'MM/YY' });

    // Apply mask to the CVV input
    $('#cvv').mask('000', { placeholder: '___' });

    // Handle form submission
    $('#checkout-form').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        alert('Payment Successful!');
    });
});
