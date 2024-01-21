import { Component } from '@angular/core';
import { ilibros } from '../../Interfaces/ilibros';
import { LibrosService } from '../../Services/libros.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class ProyectosComponent {
  title = 'Libros';
  libros: ilibros[];
  constructor(private librosService: LibrosService) {}
    ngOnInit() {
    this.cargaTabla();
    }
    cargaTabla() {
      this.librosService.todos().subscribe((listalibros) => {
      this.libros = listalibros;
      console.log(listalibros);
    });
  }
  alerta(){
    Swal.fire('Libros', 'Mensaje en Libros', 'success');
  }
  eliminar(ID_libro: number) {
    Swal.fire({
      title: 'Libros',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.librosService.eliminar(ID_libro).subscribe((data) => {
          this.cargaTabla();
          Swal.fire({
          title: 'Libros',
          text: 'Se eliminó con éxito el registro',
          icon: 'success',
        });
      });
      } else {
        Swal.fire({
          title: 'Libros',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }

}
