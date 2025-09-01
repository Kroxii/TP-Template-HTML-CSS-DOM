const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    document.getElementById('error-nom').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-message').textContent = '';

    
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (!nom) {
      document.getElementById('error-nom').textContent = 'Le nom est requis.';
      isValid = false;
    }

    if (!email) {
      document.getElementById('error-email').textContent = 'L\'email est requis.';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('error-email').textContent = 'L\'email est invalide.';
      isValid = false;
    }

    if (!message) {
      document.getElementById('error-message').textContent = 'Le message est requis.';
      isValid = false;
    }

    if (isValid) {
      
      document.getElementById('confirmationModal').style.display = 'flex';
      form.reset();
    }
  });

  
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('confirmationModal').style.display = 'none';
  });

  
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('confirmationModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });