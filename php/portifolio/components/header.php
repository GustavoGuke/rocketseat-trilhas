<?php
    $itens = [
        ['href' => '#','text' => 'Projetos'],
        ['href' => '#','text' => 'Github'],
        ['href' => '#','text' => 'Linkedin'],
        ['href' => '#','text' => 'Twiter'],
    ];

?>

<header class="px-4 py-6 flex items-center justify-between ">
    <div class="font-bold text-cyan-600">Portifolio</div>
    <div>
        <ul class="flex gap-4">

            <?php foreach ($itens as $item) : ?>
                <li><a href="<?= $item['href'] ?>" class="hover:text-cyan-600 hover:underline"><?= $item['text'] ?></a></li>
            <?php endforeach ?>
        </ul>
    </div>
</header>