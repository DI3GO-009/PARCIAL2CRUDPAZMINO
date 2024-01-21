<?php
require_once('../Config/cls_conexion.model.php');
Class Clase_Libros
{
    public function todos()
    {
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar(); 
        $cadena = "SELECT * FROM `Libros`";
        $result = mysqli_query($con,$cadena);
        return $result;
    }catch (Throwable $th)
    {
        return $th ->getMessage();
    }finally{
        $con -> close();
    }
}
public function uno($ID_libro)
{
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar(); 
    $cadena = "SELECT * FROM `Libros` WHERE `ID_libro` = $ID_libro";
    $result = mysqli_query($con,$cadena);
    return $result;
}catch (Throwable $th){
    return $th ->getMessage();
}finally{
    $con -> close();
}
}

public function insertar($ID_autor,$Titulo,$Genero,$Fecha_publicacion)
    {
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar(); 
        $cadena = "INSERT INTO `Libros`(`ID_autor`, `Titulo`, `Genero`, `Fecha_publicacion`) VALUES ($ID_autor ,'$Titulo','$Genero','$Fecha_publicacion',NOW(),NOW(),,NOW(),,NOW())";
        $result = mysqli_query($con,$cadena);
        return 'ok';
    }catch (Throwable $th){
        return $th ->getMessage();
    }finally{
        $con -> close();
    }
    }
    public function actualizar($ID_libro,$ID_autor,$Titulo,$Genero,$Fecha_publicacion)
    {
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar(); 
        $cadena = "UPDATE `Libros` SET `ID_autor`=$ID_autor ,`Titulo`='$Titulo',`Genero`='$Genero',`Fecha_publicacion`='$Fecha_publicacion' WHERE `ID_libro`=$ID_libro";
        $result = mysqli_query($con,$cadena);
        return 'ok';
    }catch (Throwable $th){
        return $th ->getMessage();
    }finally{
        $con -> close();
    }
    }
    public function eliminar($ID_libro)
    {
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar(); 
        $cadena = "DELETE FROM `Libros` WHERE `ID_Libro`=$ID_libro";
        $result = mysqli_query($con,$cadena);
        return 'ok';
    }catch (Throwable $th){
        return $th ->getMessage();
    }finally{
        $con -> close();
    }
    }

}