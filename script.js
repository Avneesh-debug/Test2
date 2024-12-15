// Basic form interaction example (optional)
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting normally
  alert('Thank you for reaching out!');
});