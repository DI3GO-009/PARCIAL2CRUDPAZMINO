import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LibrosService } from '../../../Services/libros.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevolibro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevolibro.component.html',
  styleUrl: './nuevolibro.component.css'
})
export class NuevolibroComponent {
  title ='';
  id!: number;
  libro: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Cargo: new FormControl('', Validators.required),
    Salario: new FormControl('', Validators.required),
    Fecha_contratacion: new FormControl('', Validators.required),

});
  constructor(
    private librosServicio: LibrosService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ){}
  ngOnInit(){
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Libro';
    }else{
      this.title = 'Actualizar Libro';
      this.librosServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.libro.patchValue({
          Titulo: res.Titulo,
          Genero: res.Genero,
         
          Fecha_publicacion: res.Fecha_publicacion,
        });
      });
    }
  }
  get f() {
    return this.libro.controls;
  }
  grabar() {
    Swal.fire({
      title: 'Libros',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.librosServicio
            .insertar(this.libro.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Libros',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/libros']);
              this.id = 0;
            });
        } else {
          this.librosServicio
            .actualizar(this.libro.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Libros',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/libros']);
              this.id = 0;
            });
          }
        }else{
          Swal.fire({
            title: 'Libros',
            text: 'El usuario canceló la acción',
            icon: 'info',
          });
        }
      });
    }
}
