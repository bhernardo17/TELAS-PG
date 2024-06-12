const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/api/form', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Atualizar a página com os novos dados
  })
  .catch(error => {
    console.error(error);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var editarBtn = document.getElementById('editarBtn');
  var modalEditar = document.getElementById('modalEditar');
  var closeEditar = document.getElementById('closeEditar');
  
  // Função para abrir o modal de edição
  editarBtn.addEventListener('click', function() {
    modalEditar.style.display = 'block';
  });
  
  // Função para fechar o modal de edição
  closeEditar.addEventListener('click', function() {
    modalEditar.style.display = 'none';
  });
  
  // Função para fechar o modal quando clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target == modalEditar) {
      modalEditar.style.display = 'none';
    }
  });

  // Função para cancelar a edição
  function cancelar() {
    modalEditar.style.display = 'none';
  }
  
  // Função para salvar as alterações
  function salvar() {
    modalEditar.style.display = 'none';
  }
});

function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

function changeFormContent(type) {
const formContent = document.getElementById("form-content");

if (type === 'eletronico') {
    formContent.innerHTML = `
        <p class="paragraph"><strong>Vigência: 17/10/2002 - 17/10/2024</strong></p>
        <p class="paragraph"><strong>Fornecedor: Bhernardo </strong></p>
        <p class="paragraph"><strong>CNPJ: 11716316-0 </strong></p>
        <p class="paragraph"><strong>Sistema: Windows </strong></p>
        <p class="paragraph"><strong>Info.Contratuais: Exemplo </strong></p>
        <p class="paragraph"><strong>Valor Anual: 17.000,00</strong></p>
        <p class="paragraph"><strong>Fiscal e-Gov: Cassio </strong></p>
        <div class="baixo">
            <button class="btnarqui"><span class="material-symbols-outlined">inventory_2</span>Arquivar</button>
            <button id="editarBtn" class="btnedit"><span class="material-symbols-outlined">border_color</span>Editar</button>
        </div>  
    `;
} else if (type === 'contrato') {
    formContent.innerHTML = `
        <p class="paragraph"><strong>Vigência: 01/01/2020 - 01/01/2025</strong></p>
        <p class="paragraph"><strong>Fornecedor: Exemplo Ltda </strong></p>
        <p class="paragraph"><strong>CNPJ: 12345678-9 </strong></p>
        <p class="paragraph"><strong>Sistema: Linux </strong></p>
        <p class="paragraph"><strong>Info.Contratuais: Detalhes do contrato </strong></p>
        <p class="paragraph"><strong>Valor Anual: 25.000,00</strong></p>
        <p class="paragraph"><strong>Fiscal e-Gov: João </strong></p>
        <div class="baixo">
            <button class="btnarqui"><span class="material-symbols-outlined">inventory_2</span>Arquivar</button>
            <button id="editarBtn" class="btnedit"><span class="material-symbols-outlined">border_color</span>Editar</button>
        </div>
    `;
}

// Atualiza as referências dos botões e do modal
var editarBtn = document.getElementById('editarBtn');
var modalEditar = document.getElementById('modalEditar');
var closeEditar = document.getElementById('closeEditar');

// Remove event listener antigos para evitar duplicações
editarBtn.removeEventListener('click', openModal);
closeEditar.removeEventListener('click', closeModal);
window.removeEventListener('click', clickOutsideModal);

// Adiciona event listeners atualizados
editarBtn.addEventListener('click', openModal);
closeEditar.addEventListener('click', closeModal);
window.addEventListener('click', clickOutsideModal);
}

// Função para abrir o modal
function openModal() {
var modalEditar = document.getElementById('modalEditar');
modalEditar.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
var modalEditar = document.getElementById('modalEditar');
modalEditar.style.display = 'none';
}

// Função para fechar o modal quando clicar fora dele
function clickOutsideModal(event) {
var modalEditar = document.getElementById('modalEditar');
if (event.target == modalEditar) {
  modalEditar.style.display = 'none';
}
}

// Função para abrir o modal de Logout
function abrirModalSair() {
document.getElementById("modalExit").style.display = "block";
document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

// Função para fechar qualquer modal
function fecharModal() {
document.getElementById("modalExit").style.display = "none";
document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0)";
}

// Evento de clique nos botões para abrir os modais
document.getElementById("botaoExit").addEventListener("click", abrirModalSair);

// Evento de clique no botão de fechar do modal
document.querySelectorAll("#voltar").forEach(function (element) {
element.addEventListener("click", function () {
fecharModal(element.closest(".modoff").id);
});
});