import { Component } from '@angular/core';
import { iautores } from '../../Interfaces/iautores';
import { AutoresService } from '../../Services/autores.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})
export class AutoresComponent {

  title = 'Autores';
  autores: iautores[];

  constructor(private autoresServicio: AutoresService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.autoresServicio.todos().subscribe((listaAutores) => {
      this.autores = listaAutores;
      console.log(listaAutores);
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
        this.autoresServicio.eliminar(ID_autor).subscribe((datos) => {
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
