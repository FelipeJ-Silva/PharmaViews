<?php
// Incluir o arquivo de conexão
include('db.php');

// Buscar todos os registros da tabela
$sql = "SELECT * FROM tarefas";
$stmt = $pdo->query($sql);
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Retornar os dados no formato JSON
echo json_encode($tasks);
?>
