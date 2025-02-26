<?php
require 'dados.php';

$id = $_REQUEST['id'];

$filtrado = array_filter($livros, fn($livro) => $livro['id'] == $id);

$livro = array_pop($filtrado);

$view = "livro.wiew";

require "views/template/app.php";
?>