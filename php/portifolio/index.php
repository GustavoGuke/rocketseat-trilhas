<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>
        <?php
        $saudacao = "Olá";
        echo $saudacao;
        ?>
        <hr>
        <p>
            <?php
            if ((date("H") - 3) >= 6 && (date("H") - 3)< 12) {
                echo "Bom dia " . (date("H") - 3) . " horas";
            } else if ((date("H") - 3) >= 12 && (date("H") - 3) < 18) {
                echo "Boa tarde" . (date("H") - 3);
            } else {
                echo "Boa noite";
            }
            ?>
        </p>
        <hr>

        <ul>
            <?php
            $listaTarefas = [
                [
                    "Tarefa1" => "livro",
                    "Tarefa2" => "estudo php",
                    "Tarefa3" => "estudo js",
                    "finalizada" => true
                ],
                [
                    "Tarefa1" => "mkt",
                    "Tarefa2" => "fazer ebook",
                    "Tarefa3" => "site wordpress",
                    "finalizada" => false
                ],
                [
                    "Tarefa1" => "ultra aprendizado",
                    "Tarefa2" => "estudo php",
                    "Tarefa3" => "estudo react",
                    "finalizada" => true
                ]
            ];

            function exibirTarefaFinalizada($tarefas) {
                $filtrados = [];
                // foreach ($tarefas as $tarefa) {
                //     if ($tarefa['finalizada']) {
                //         $filtrados[] = $tarefa;
                //     }
                // }
                
                return array_filter($tarefas, fn($tarefa) => $tarefa['finalizada'] == true); // array_filter() é uma função nativa do phps;
            }

            foreach (exibirTarefaFinalizada($listaTarefas) as $tarefa) {
                echo "<li>{$tarefa['Tarefa1']}</li>";
                echo "<li>{$tarefa['Tarefa2']}</li>";
                echo "<li>{$tarefa['Tarefa3']}</li>";
            }
            ?>
        </ul>
    </h1>
</body>

</html>