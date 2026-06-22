// URL do Google Apps Script (substitua pelo seu)
const urlPlanilha = "COLE_AQUI_SEU_URL_DO_GOOGLE_SCRIPT";

// Função para enviar dados à planilha Google
async function enviarParaPlanilha(tipo, nome, item, quantidade, telefone) {
  const dados = { tipo, nome, item, quantidade, telefone };

  try {
    const resposta = await fetch(urlPlanilha, {
      method: "POST",
      body: JSON.stringify(dados),
      headers: { "Content-Type": "application/json" }
    });
    if (resposta.ok) {
      alert("Registro enviado com sucesso!");
      window.location.href = "index.html"; // retorna ao menu principal
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch (erro) {
    alert("Falha na conexão. Verifique sua internet.");
  }
}

// Função genérica para tratar envio dos formulários
function handleFormSubmit(formId, tipo) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.querySelector("[name='nome']").value;
    const item = form.querySelector("[name='tipo']")?.value || form.querySelector("[name='roupa']")?.value || form.querySelector("[name='alimento']")?.value || form.querySelector("[name='desejo']")?.value;
    const quantidade = form.querySelector("[name='quantidade']")?.value || "-";
    const telefone = form.querySelector("[name='telefone']").value;

    enviarParaPlanilha(tipo, nome, item, quantidade, telefone);
    form.reset();
  });
}

// Doações
handleFormSubmit("formVestuario", "Doação de Vestuário");
handleFormSubmit("formAlimentos", "Doação de Alimentos");

// Trocas
handleFormSubmit("formTrocaVestuario", "Troca de Vestuário");
handleFormSubmit("formTrocaAlimentos", "Troca de Alimentos");
