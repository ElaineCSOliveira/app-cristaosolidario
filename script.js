function abrirSubmenu(id) {
  document.querySelectorAll('.submenu, .formulario').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.getElementById('menu-principal').style.display = 'none';
}

function abrirFormulario(id) {
  document.querySelectorAll('.submenu, .formulario').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function voltarMenu() {
  document.querySelectorAll('.submenu, .formulario').forEach(el => el.style.display = 'none');
  document.getElementById('menu-principal').style.display = 'block';
}

function agradecer(event) {
  event.preventDefault();
  const mensagem = event.target.parentElement.querySelector('.mensagem');
  mensagem.textContent = "Obrigado pela sua ajuda!";
  event.target.reset();
}