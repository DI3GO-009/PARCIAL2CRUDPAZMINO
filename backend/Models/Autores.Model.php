<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Autores
{
    public function todos()
    {
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM Autores";
        $result = mysqli_query($con, $cadena);
        return $result;
    }catch (Throwable $th) {
        echo $th->getMessage();
    } finally {
        $con->close();
    }
}
public function uno($ID_autor)
{
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "SELECT * FROM Autores WHERE ID_autor = $ID_autor";
    $result = mysqli_query($con, $cadena);
    return $result;
}catch (Throwable $th) {
   return $th->getMessage();
} finally {
    $con->close();
}
}

public function insertar($Nombre, $Nacionalidad, $Fecha_nacimiento)
{
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "INSERT INTO `Autores`(`Nombre`, `Nacionalidad`, `Fecha_nacimiento`) VALUES ('$Nombre','$Nacionalidad',NOW())"; 
    $result = mysqli_query($con, $cadena);
    return 'ok';
}catch (Throwable $th) {
    return $th->getMessage();
}finally {
    $con->close();
}

{
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "INSERT INTO `Autores`(`Nombre`, `Nacionalidad`, `Fecha_nacimiento`) VALUES ('$Nombre','$Nacionalidad','$Fecha_nacimiento',NOW())"; 
    $result = mysqli_query($con, $cadena);
    return 'ok';
}catch (Throwable $th) {
    return $th->getMessage();
}finally {
    $con->close();
}
}
}

public function actualizar($ID_autor, $Nombre, $Nacionalidad, $Fecha_nacimiento)
{
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "UPDATE Autores SET Nombre = '$Nombre', Nacionalidad = '$Nacionalidad', Fecha_nacimiento = '$Fecha_nacimiento' WHERE ID_autor = $ID_autor";
    $result = mysqli_query($con, $cadena);
    return 'ok';
}catch (Throwable $th) {
    return $th->getMessage();
}finally {
    $con->close();
}

{
    try{
     $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "UPDATE Autores SET Nombre = '$Nombre', Nacionalidad = '$Nacionalidad', Fecha_nacimiento = '$Fecha_nacimiento' WHERE ID_autor = $ID_autor";    $result = mysqli_query($con, $cadena);
    return 'ok';
    }catch (Throwable $th) {
        return $th->getMessage();
    }finally {
        $con->close();
    }
}
}

public function eliminar($ID_autor)
    {
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar();
        $cadena = "DELETE FROM Autores WHERE ID_autor = $ID_autor";
        $result = mysqli_query($con, $cadena);
        return 'ok';
    }catch (Throwable $th) {
        return $th->getMessage();
    }finally {
        $con->close();
    }
}
}