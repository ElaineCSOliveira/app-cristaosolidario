// Função genérica para tratar envio dos formulários
function handleFormSubmit(formId, tipo) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Obrigado! Sua ${tipo} foi registrada com sucesso.`);
    form.reset();
  });
}

// Doações
handleFormSubmit('formVestuario', 'doação de vestuário');
handleFormSubmit('formAlimentos', 'doação de alimentos');

// Trocas
handleFormSubmit('formTrocaVestuario', 'solicitação de troca de vestuário');
handleFormSubmit('formTrocaAlimentos', 'solicitação de troca de alimentos');