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
            if (date("H") >= 6 && date("H") < 12) {
                echo "Bom dia";
            } else if (date("H") >= 12 && date("H") < 18) {
                echo "Boa tarde";
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
                    "Tarefa3" => "estudo js"
                ]
            ];
            foreach ($listaTarefas as $tarefa) {
                echo "<li>{$tarefa["Tarefa1"]}</li>";
                echo "<li>{$tarefa["Tarefa2"]}</li>";
                echo "<li>{$tarefa["Tarefa3"]}</li>";
            }
            ?>
        </ul>
    </h1>
</body>

</html>