<?php 
    
    $controller = "index";

    if( isset($_SERVER['PATH_INFO'])){
        $controller = str_replace('/','', $_SERVER['PATH_INFO']);
    }
    $app_path = __DIR__ . "/controllers/{$controller}.controller.php";
    require $app_path;
?>

