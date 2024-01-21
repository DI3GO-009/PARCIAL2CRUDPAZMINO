import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AutoresService } from '../../../Services/autores.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevoautor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevoautor.component.html',
  styleUrl: './nuevoautor.component.css'
})
export class NuevoautorComponent {
  title ='';
  id!: number;
  autor: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Cargo: new FormControl('', Validators.required),
    Salario: new FormControl('', Validators.required),
    Fecha_contratacion: new FormControl('', Validators.required),

});
  constructor(
    private autorsServicio: AutoresService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ){}
  ngOnInit(){
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo autor';
    }else{
      this.title = 'Actualizar autor';
      this.autorsServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.autor.patchValue({
          Nombre: res.Nombre,
          Nacionalidad: res.Nacionalidad,          
          Fecha_nacimiento: res.Fecha_nacimiento,
        });
      });
    }
  }
  get f() {
    return this.autor.controls;
  }
  grabar() {
    Swal.fire({
      title: 'autors',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.autorsServicio
            .insertar(this.autor.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'autors',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/autors']);
              this.id = 0;
            });
        } else {
          this.autorsServicio
            .actualizar(this.autor.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'autors',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/autors']);
              this.id = 0;
            });
          }
        }else{
          Swal.fire({
            title: 'autors',
            text: 'El usuario canceló la acción',
            icon: 'info',
          });
        }
      });
    }


}
