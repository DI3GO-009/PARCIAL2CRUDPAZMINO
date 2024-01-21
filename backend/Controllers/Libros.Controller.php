<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once ('../Models/Proyectos.Model.php');
$Libros = new Clase_Libros();

switch ($_GET['op']) {
    case 'todos':
        $datos = array();
        $datos = $Libros->todos();
        while ($fila = mysqli_fetch_assoc($datos)){
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
        case 'uno':
        $ID_libro = $_POST["ID_libro"]; 
        $datos = array(); 
        $datos = $Libros->uno($ID_libro); 
        $uno = mysqli_fetch_assoc($datos); 
        echo json_encode($uno); 
        break;
        case 'insertar':    
            $ID_autor = $_POST["ID_autor"];
            $Titulo = $_POST["Titulo"];
            $Genero = $_POST["Genero"];
            $Fecha_publicacion = $_POST["Fecha_publicacion"];
            $datos = array();
            $datos = $Proyectos->insertar($ID_autor,$Titulo,$Genero,$Fecha_publicacion);
            echo json_encode($datos);
            break;
    case 'actualizar':
        $ID_libro = $_POST["ID_libro"];
        $ID_autor = $_POST["ID_autor"];
        $Titulo = $_POST["Titulo"];
        $Genero = $_POST["Genero"];
        $Fecha_publicacion = $_POST["Fecha_publicacion"];
        
        $datos = array();
        $datos = $Libros->actualizar($ID_libro, $ID_autor, $Titulo,$Genero,$Fecha_publicacion);
        echo json_encode($datos);
        break;
        case 'eliminar':
            $ID_libro = $_POST["ID_libro"];
            $datos = array();
            $datos = $Libros->eliminar($ID_libro);
            echo json_encode($datos);
            break;
    }