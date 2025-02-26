 <div class="p-2 border-stone-700 border-2 rounded-md bg-stone-800">

     <div class="flex">

         <div class="w-1/3">
             <img src=<?= $livro['img'] ?> alt="capa do livro">
         </div>

         <section class="space-y-1 pl-2">
             <a href="./livro.php?id=<?= $livro['id'] ?>" id=<?= $livro['id'] ?> class="font-semibold hover:underline"><?= $livro['titulo'] ?></a>
             <h3 class="text-xs italic"><?= $livro['autor'] ?></h3>
             <p class="text-lg italic text-yellow-400"><?= $livro['avaliacao'] ?></p>
         </section>
     </div>

     <div>
         <p><?= $livro['descricao'] ?></p>
     </div>
 </div>