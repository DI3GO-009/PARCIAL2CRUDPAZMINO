import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AutoresComponent  } from './views/autores/autores.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { NuevoEmpleadoComponent  } from './views/empleados/nuevo-empleado/nuevo-empleado.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { NuevoProyectoComponent } from './views/proyectos/nuevo-proyecto/nuevo-proyecto.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'autores',
   component: AutoresComponent },
   { path: 'libros',
   component: AutoresComponent },
   { path: 'autores',
   component: AutoresComponent },
   { path: 'autores',
   component: AutoresComponent },
   { path: 'autores',
   component: AutoresComponent },
   
  
  {
    path: 'proyectos',
    component: ProyectosComponent,
  },
  {
    path: 'nuevo-proyecto',
    component: NuevoProyectoComponent,
  },
  {
    path: 'editar-proyecto/:id',
    component: NuevoProyectoComponent,
  },


  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
