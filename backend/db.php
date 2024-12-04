<?php
// Configurações de conexão com o banco de dados
$host = "localhost"; // ou o endereço do seu servidor
$dbname = "db_postgresql";
$user = "postgres";
$password = "088713";

try {
    // Conectando ao banco de dados PostgreSQL
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    // Configura a exceção de erros
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
    exit();
}
?>
