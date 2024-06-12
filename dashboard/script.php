<?php
// Conexão com o banco de dados
include_once ('../db/gdb_mysql.php');

$gdb = new gdb();

// Consulta SQL para obter os dados para o gráfico de pizza
$query = "SELECT nomeFornecedor, SUM(custoMensal) AS total FROM contratos INNER JOIN fornecedor ON contratos.idFornecedor = fornecedor.idFornecedor GROUP BY fornecedor.idFornecedor";
$gdb->open($query);
$data = $gdb->gs;

// Formatar os dados no formato adequado para o gráfico de pizza
$labels = [];
$dataPie = [];
foreach ($data as $row) {
    $labels[] = $row['nomeFornecedor'];
    $dataPie[] = $row['total'];
}

// Retornar os dados no formato JSON
echo json_encode(['labels' => $labels, 'data' => $dataPie]);
?>
