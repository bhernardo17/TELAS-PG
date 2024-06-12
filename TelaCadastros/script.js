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

// Função para abrir o modal
function openOverlay(type) {
    var overlay = document.getElementById('overlay-' + type);
    var overlayBackground = document.getElementById('overlay-background');
    overlay.style.display = 'flex';
    overlayBackground.style.display = 'block';
    overlay.style.zIndex = '1001'; // Garante que o modal esteja na frente da camada de fundo
}


// Função para fechar o modal
function closeOverlay(type) {
    var overlay = document.getElementById('overlay-' + type);
    var overlayBackground = document.getElementById('overlay-background');
    overlay.style.display = 'none';
    overlayBackground.style.display = 'none';
}

// Adicionar ouvinte de evento de clique para fechar o modal ao clicar fora dele
document.getElementById('overlay-background').addEventListener('click', function(event) {
    var overlayContent = document.querySelector('.overlay-content');
    if (!overlayContent.contains(event.target)) {
        closeOverlay('fornecedor');
        closeOverlay('usuario');
        closeOverlay('secretaria');
    }
});

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
function toggleFilterOptions() {
    var filterDropdown = document.getElementById('filter-dropdown');
    if (filterDropdown.style.display === 'none' || filterDropdown.style.display === '') {
        filterDropdown.style.display = 'block';
    } else {
        filterDropdown.style.display = 'none';
    }
}

function applyFilter(filterValue) {
    // Implemente a lógica para aplicar o filtro com o valor selecionado
    console.log('Filtro aplicado:', filterValue);

    // Oculta o dropdown após selecionar uma opção
    var filterDropdown = document.getElementById('filter-dropdown');
    filterDropdown.style.display = 'none';
}


// Adicionar um ouvinte de evento de clique ao botão de pesquisa
document.getElementById('searchButton').addEventListener('click', search);

