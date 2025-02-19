<?php 
    require './dados.php';

    $id = $_REQUEST['id'];
    
    $filtrado = array_filter($livros, fn($livro) => $livro['id'] == $id);

    $livro = array_pop($filtrado);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Wise</title>
</head>
<body class="bg-stone-900 text-white">

    <header class=" bg-stone-800 border-b border-stone-700 ">
        <nav class="flex justify-between items-center  py-4 mx-auto max-w-screen-lg">

            <div class="font-bold text-xl tracking-wide">Book wise</div>
            <ul class="flex space-x-4 font-semibold">

                <li><a href="" class="text-lime-500">Explorar</a></li>
                <li><a href="" class="hover:underline">Meus livros</a></li>
            </ul>

            <ul>
                <li><a href="" class="hover:underline">Fazer Login</a></li>
                
            </ul>
        </nav>
    </header>

    <main class="px-8 py-4 mx-auto max-w-screen-lg space-y-6">

    <div class="p-2 border-stone-700 border-2 rounded-md bg-stone-800">

<div class="flex">  

    <div class="w-1/3">
        <img src=<?=$livro['img']?> alt="capa do livro">
    </div>

    <section class="space-y-1 pl-2">
        <a href="./livro.php?id=<?=$livro['id']?>" id=<?=$livro['id']?> class="font-semibold hover:underline"><?=$livro['titulo']?></a>
        <h3 class="text-xs italic"><?=$livro['autor']?></h3>
        <p  class="text-lg italic text-yellow-400"><?=$livro['avaliacao']?></p>
    </section>
</div>

<div>
    <p><?=$livro['descricao']?></p>
</div>
</div>

    </main>
</body>
</html>