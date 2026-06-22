const urlPlanilha = "COLE_AQUI_SEU_URL_DO_GOOGLE_SCRIPT";

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
  } catch {
    alert("Falha na conexão. Verifique sua internet.");
  }
}

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

handleFormSubmit("formVestuario", "Doação de Vestuário");
handleFormSubmit("formAlimentos", "Doação de Alimentos");
handleFormSubmit("formTrocaVestuario", "Troca de Vestuário");
handleFormSubmit("formTrocaAlimentos", "Troca de Alimentos");
