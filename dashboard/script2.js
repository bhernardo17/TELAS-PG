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

// script.js

document.addEventListener('DOMContentLoaded', (event) => {
  // Dados para o gráfico de barras
  let labelsx = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"];
  let valoresx = [10, 20, 30, 30, 55, 10, 3, 60, 90, 11, 119, 77];

  // Criando o gráfico de barras
  const ctx1 = document.getElementById('grafico1').getContext('2d');
  new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: labelsx,
          datasets: [{
              label: 'Valor Total das Secreatarias',
              data: valoresx,
              borderWidth: 1,
              backgroundColor: 'rgba(175, 188, 207, 1)',
              borderColor: 'rgba(54, 162, 235, 1)'
          }]
      },
      options: {
          indexAxis: 'y',
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                    color: 'white' // Cor das letras do eixo Y
                }
            },
            x: {
                ticks: {
                    color: 'white' // Cor das letras do eixo X
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Cor das letras da legenda
                }
            }
        }
    }
});
});
              
// function getDataFromDB() {
//     $.ajax({
//         url: 'TelaDashboard/script.php',
//         type: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             // Dados recebidos com sucesso, chamar a função para construir o gráfico
//             buildPieChart(data.labels, data.data);
//         },
//         error: function(xhr, status, error) {
//             // Tratar erros
//             console.error(error);
//         }
//     });
// }
             
  // Dados para o gráfico de pizza
  let labelsPie = ['Betha', 'Ciga', 'CIASC'];
  let dataPie = [300, 50, 100];
  let backgroundColorsPie = ['rgba(150, 165, 189, 1)', 'rgb(54, 162, 235)', 'rgba(175, 188, 207, 1)'];

  // Criando o gráfico de pizza
  const ctx2 = document.getElementById('grafico2').getContext('2d');
  new Chart(ctx2, {
      type: 'pie',
      data: {
          labels: labelsPie,
          datasets: [{
              label: 'Contrato',
              data: dataPie,
              backgroundColor: backgroundColorsPie,
              hoverOffset: 4
          }]
      }
  });
// // Função para construir o gráfico de pizza com os dados recebidos
// function buildPieChart(labels, dataPie) {
//     // Construir o gráfico usando Chart.js
//     const ctx2 = document.getElementById('grafico2').getContext('2d');
//     new Chart(ctx2, {
//         type: 'pie',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Contrato',
//                 data: dataPie,
//                 backgroundColor: backgroundColorsPie,
//                 hoverOffset: 4
            
//             }]
//         }
//         },
//         options: {
//             title: {
//                 display: True,
//                 text: 'Titulo aqui',
//                 position: 'bottom',
//                 fontSize: 16,
//                 fontColor: '#000000',
//                 padding: 20,
//             },
//             animation: {
//                 animateScale: true,
//                 animateRotate: true,
//             },
//         });
// }

// // Chamar a função para obter os dados do banco e construir o gráfico de pizza
// getDataFromDB();

