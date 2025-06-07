// Import our custom CSS
import '/scss/styles.scss';
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const forms = document.querySelectorAll('.needs-validation');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));

  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (form.checkValidity()) {
        form.classList.remove('was-validated');
        form.reset();
        successModal.show();
      } else {
        form.classList.add('was-validated');
      }
    },
      false);
  });
});