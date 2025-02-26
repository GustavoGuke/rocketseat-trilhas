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

        <form action="" class="w-full flex space-x-2 mt-6">
            
            <input 
                type="text" 
                class="border-stone-700 border-2 rounded-md bg-stone-900 text-sm focus:outline-none px-2 py-1"
                placeholder="livro">
            <button type="submit" class="">Pesquisar</button>
        </form>

        <section class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4">

            <!-- card -->
             <?php require "views/{$view}.php"; ?>

        </section>

    </main>
</body>
</html>