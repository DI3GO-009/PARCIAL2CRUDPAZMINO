import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iautores } from '../Interfaces/iautores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
private urlBase: string = 'http://localhost/Crud-Examen-main/backed/Controllers/Empleados.Controller.php?op=';
  constructor(private clientePhp: HttpClient) { }

  todos(): Observable<iautores[]> {
    return this.clientePhp.get<iautores[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<iautores> {
    var emp = new FormData();
    emp.append('ID_autor', id.toString());
    return this.clientePhp.post<iautores>(this.urlBase + 'uno', emp);
  }
  insertar(autor: iautores): Observable<any> {
    var emp = new FormData();
    emp.append('Nombre', autor.Nombre);
    emp.append('Nacionalidad', autor.Nacionalidad);
    emp.append('Fecha_nacimiento', autor.Fecha_nacimiento.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', emp);
  }
  actualizar(autor: iautores, id: number): Observable<any> {
    var emp = new FormData();
    emp.append('ID_autor', id.toString());
    emp.append('Nombre', autor.Nombre);
    emp.append('Nacionalidad', autor.Nacionalidad);
    emp.append('Fecha_nacimiento', autor.Fecha_nacimiento.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', emp);
  }
  eliminar(id: number): Observable<any> {
    var emp = new FormData();
    emp.append('ID_autor', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', emp);
  }

}
