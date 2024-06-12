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
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

var dropdownContent = document.getElementById("dropdownContent");
    document.getElementById("dropdownButton").addEventListener("click", function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("editarBtn");
    var span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    span.onclick = function() {
      modal.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
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