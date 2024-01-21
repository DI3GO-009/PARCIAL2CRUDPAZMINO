import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ilibros } from '../Interfaces/ilibros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private urlBase: string = 'http://localhost/Crud-Examen-main/backed/Controllers/proyectos.Controller.php?op=';
  constructor(private clientePhp:HttpClient) { }
  todos(): Observable<ilibros[]> {
    return this.clientePhp.get<ilibros[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<ilibros> {
    var emp = new FormData();
    emp.append('ID_libro', id.toString());
    return this.clientePhp.post<ilibros>(this.urlBase + 'uno', emp);
  }
  insertar(libros: ilibros): Observable<any> {
    var emp = new FormData();
    emp.append('ID_libro', libros.ID_autor.toString());
    emp.append('Titulo', libros.Titulo);
    emp.append('Genero', libros.Genero);
    emp.append('Fecha_publicacion', libros.Fecha_publicacion.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', emp);
  }
  actualizar(libros:ilibros, id:number): Observable<any> {
    var emp = new FormData();
    emp.append('ID_libro', id.toString());
    emp.append('ID_autor', libros.ID_autor.toString());
    emp.append('Titulo', libros.Titulo);
    emp.append('Genero', libros.Genero);
    emp.append('Fecha_publicacion', libros.Fecha_publicacion.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', emp);
  }
  eliminar(id: number): Observable<any> {
    var emp = new FormData();
    emp.append('ID_libro', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', emp);
  }
}
