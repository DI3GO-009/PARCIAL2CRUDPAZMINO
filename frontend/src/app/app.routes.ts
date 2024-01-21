import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LibrosComponent } from './views/libros/libros.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { NuevolibroComponent  } from './views/libros/nuevolibro/nuevolibro.component';
import { AutoresComponent } from './views/autores/autores.component';
import { NuevoautorComponent } from './views/autores/nuevoautor/nuevoautor.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'libros', 
  component: LibrosComponent },
  {
    path: 'nuevolibro',
    component: NuevolibroComponent,
  },
  {
    path: 'editar-libro/:id',
    component: NuevolibroComponent,
  },
  {
    path: 'autores',
    component: AutoresComponent,
  },
  {
    path: 'nuevoautor',
    component: NuevoautorComponent,
  },
  {
    path: 'editar-autor/:id',
    component: NuevoautorComponent,
  },


  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
