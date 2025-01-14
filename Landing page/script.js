
//   JavaScript for handling "Remove" button click
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.cart-item').remove();
      alert('Item removed from cart');
      // Add logic to update the total price if necessary
    });
  });
  