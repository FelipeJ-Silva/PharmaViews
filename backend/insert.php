<?php
// Incluir o arquivo de conexão
include('db.php');

// Receber os dados do formulário via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $acao = $_POST['acao'];
    $data_prevista = $_POST['data_prevista'];
    $investimento_previsto = $_POST['investimento_previsto'];

    // Inserir dados na tabela
    $sql = "INSERT INTO tarefas (acao, data_prevista, investimento_previsto) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$acao, $data_prevista, $investimento_previsto]);

    echo "Dados inseridos com sucesso!";
}
?>
