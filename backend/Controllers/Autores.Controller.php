<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}
require_once ('../Models/Empleados.Model.php');
$Autores = new Clase_Autores();
switch ($_GET["op"]) {
    case 'todos':
        $datos = array ();
        $datos = $Empleados->todos();
        while ($fila = mysqli_fetch_assoc($datos)){
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
        case "uno":
            $ID_autor = $_POST["ID_autor"];
            $datos = array();
            $datos = $Autores->uno($ID_autor);
            $uno = mysqli_fetch_assoc($datos);
            echo json_encode($uno);
            break;
            case "insertar":
                $Nombre = $_POST["Nombre"];
                $Nacionalidad = $_POST["Nacionalidad"];
                $Fecha_nacimiento = $_POST["Fecha_nacimiento"];
                $datos = array();
                $datos = $Autores->insertar($Nombre,$Nacionalidad,$Fecha_nacimiento);
                echo json_encode($datos);
                break;
                case "actualizar":
                    $ID_autor = $_POST["ID_autor"];
                    $Nombre = $_POST["Nombre"];
                    $Nacionalidad = $_POST["Nacionalidad"];
                    $Fecha_nacimiento = $_POST["Fecha_nacimiento"];
                    $datos = array();
                    $datos = $Empleados->actualizar($ID_autor,$Nombre,$Nacionalidad,$Fecha_nacimiento);
                    echo json_encode($datos);
                    break;
                    case "eliminar":
                        $ID_autor = $_POST["ID_autor"];
                        $datos = array();
                        $datos = $Autores->eliminar($ID_autor);
                        echo json_encode($datos);
                        break;

    }
