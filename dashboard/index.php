<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="style.css">
</head>
<?php

include_once ('../db/gdb_mysql.php');

$gdb = new gdb();

$gdb->open('SELECT COUNT(*) AS TOTAL FROM fornecedor');
$totalFornecedor = $gdb->gs['TOTAL'][0];

$gdb->open('SELECT sum( custoMensal ) as total FROM contratos where now() between vigenciaInicial and vigenciaFinal');
$totalGastos = $gdb->gs['TOTAL'][0];

$gdb->open('SELECT count(idContrato) as total FROM contratos where now() between vigenciaInicial and vigenciaFinal');
$totalAtivos = $gdb->gs['TOTAL'][0];



?>
<body>
    <div class="dropdown">
        <select class="form-control"> 
            <option value="" disabled selected>Selecione a Secretaria</option>
    </select>
</div>

<div class="sidebar" id="sidebar">
    <div class="sidebar-header">
       <a href="#" onclick="toggleSidebar()">☰</a><span class="icon-text">Gestão de Sistemas PMF</span>
   </div>
   <a href="#" class="icon-middle"><span class="material-symbols-outlined">grid_view</span><span class="icon-text"> Dashboard</span></a>
   <a href="C:\Users\Teste\Desktop\PROJETO\telaCadastros/index.html" class="icon-middle"><span class="material-symbols-outlined">how_to_reg</span><span class="icon-text"> Cadastrar</span></a>
   <a href="#" class="icon-middle"><span class="material-symbols-outlined">add</span><span class="icon-text" >Adicionar</span></a>
   <a href="#" class="icon-middle"><span class="material-symbols-outlined">contract</span></i><span class="icon-text"> Contratos</span></a>
   <a href="PROJETO/ativinho/index.html" class="icon-middle"><span class="material-symbols-outlined">inventory_2</span><span class="icon-text"> Arquivados</span></a>
   <div class="bottom-icons">
       <a href="#" class="icon-bottom"><span class="material-symbols-outlined">update</span><span class="icon-text"> Histórico</span></a>
       <a href="#" class="icon-bottom" id="botaoExit"><i class="fa fa-sign-out"><span class="material-symbols-outlined">logout</span></i><span class="icon-text"> Sair</span></a>
   </div>
</div>

<div id="modalExit" class="modoff">
   <div class="modalCont">
     <i class="bi bi-box-arrow-right" id="iconExit"></i>
     <p>Você realmente deseja sair ?</p>
     <div class="divBtn">
       <button class="btnoff" id="voltar">Voltar</button>
       <button class="btnoff" id="sair">Sair</button>
     </div>
   </div>
</div>

<div class="info-container">
    <div class="info-box">
        <span class="material-symbols-outlined">
            pallet
            </span>
        <h4>Fornecedores</h4>
        <p> <?php  echo $totalFornecedor  ?> </p>        
    </div>
    <div class="info-box">
        <span class="material-symbols-outlined">
            paid
            </span>
        <h4>Gastos</h4>
        <p><?php  echo "R$ ".number_format($totalGastos, 2, ',', '.');  ?></p>
    </div>
    <div class="info-box">
        <span class="material-symbols-outlined">
            contract
            </span>
        <h4>Contratos Ativos</h4>
        <p><?=$totalAtivos; ?></p>
    </div>
</div>

</header>
<main>
    <div class="panel" id="panel1"></div>
    <div class="panel" id="panel2">
        <div style="width: 100%; height: 100%; margin-top: 16%;"  >
            <canvas id="grafico1"></canvas>
        </div>
    </div>
    <div class="panel" id="panel3">
        <div style="width: 90%; height: 90%; margin-left: 3%; margin-top:4%;">
            <canvas id="grafico2"></canvas>
        </div>
    </div>
    <div class="panel" id="panel4"></div>
</main>
    <script src="script.js"></script>
</body>
</html>
