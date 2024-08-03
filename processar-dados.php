<?php

//PEGANDO OS DADOS VINDOS DO FORMULÁRIO
$nome = $_POST['nome'];
$email = $_POST['email'];
$numero = $_POST['numero'];
$message = $_POST['message'];
$data_atual = date('d/m/Y');
$hora_atual = date('H:i:s');

//CONFIGURAÇÕES DE CREDENCIAIS
$server = '127.0.0.1';
$usuario = 'root';
$senha = '';
$banco = 'dados_clientes';

//CONEXAO COM NOSSO BANCO DE DADOS
$processar-dados = new mysqli($server, $usuario, $senha, $banco);

//VERIFICAR CONEXÃO
if($processar-dados->connect_error){
    die("Falha ao se comunicar com banco de dados: ".$processar-dados->connect_error);
}

$smtp = $processar-dados->prapare("INSERT INTO clientes (nome, email, numero, mensagem, data, hora) VALUES (?,?,?,?,?,?)");
$smtp ->bind_param("ssssss", $nome, $email, $numero, $mensagem, $data_atual, $hora_atual);

if($smtp->execute()){
    echo "Mensagem enviada com sucesso!"
}else{
    echo "Erro no envio da mensagem: ".smtp->error;
}

$smtp->close();
$processar-dados->close();

?>