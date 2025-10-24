import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { CajaComponent } from './pages/caja/caja.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reporte',    
    component: ReporteComponent
  },
  {
    path: 'caja',    
    component: CajaComponent
  },

];