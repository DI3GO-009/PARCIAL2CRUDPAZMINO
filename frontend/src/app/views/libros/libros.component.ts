import { Component } from '@angular/core';
import { ilibros } from '../../Interfaces/ilibros';
import { LibrosService } from '../../Services/libros.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  title = 'Libros';
  libros: ilibros[];
  constructor(private servicio: LibrosService) {}
  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.librosServicio.todos().subscribe((listaLibros) => {
      this.libros = listaAutores;
      console.log(listaLibros);
    });
  }
  alerta() {
    Swal.fire('Autores', 'Mensaje en autores', 'success');
  } 

  eliminar(ID_autor: number) {
    Swal.fire({
      title: 'Autores',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.librosServicio.eliminar(ID_libro).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Autores',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Autores',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }



}
