function afficherModaleConfirmation() {
  const confirmationModal = document.getElementById('confirmationModal');
  confirmationModal.style.display = 'flex';

  const closeBtn = document.querySelector('.close-confirmation');
  closeBtn.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
      confirmationModal.style.display = 'none';
    }
  });
}





document.getElementById('formContact').addEventListener('click', () => {
  const container = document.getElementById('formContainer');
  const modale = document.getElementById('contactModale');
  const closeBtn = document.querySelector('.close');


  modale.style.display = 'flex';

  
  if (document.getElementById('dynamicForm')) return;

  const form = document.createElement('form');
  form.id = 'dynamicForm';

  
  const labelNom = document.createElement('label');
  labelNom.textContent = 'Nom: ';
  const inputNom = document.createElement('input');
  inputNom.type = 'text';
  inputNom.name = 'nom';
  form.appendChild(labelNom);
  form.appendChild(inputNom);

  
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email: ';
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);

  
  const labelMsg = document.createElement('label');
  labelMsg.textContent = 'Message: ';
  const textarea = document.createElement('textarea');
  textarea.name = 'message';
  form.appendChild(labelMsg);
  form.appendChild(textarea);

  
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Envoyer';
  form.appendChild(submitBtn);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
   
   
    modale.style.display = 'none';
    form.reset();
    afficherModaleConfirmation();
  });

  container.appendChild(form);

  
  closeBtn.addEventListener('click', () => {
    modale.style.display = 'none';
  });

  
  window.addEventListener('click', (e) => {
    if (e.target === modale) {
      modale.style.display = 'none';
    }
  });
});