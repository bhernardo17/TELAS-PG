// sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
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