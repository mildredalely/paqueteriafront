import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { CajaComponent } from './pages/caja/caja.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EnvioMxComponent } from './pages/envio-mx/envio-mx.component';
import { HistorialComponent } from './pages/historial/historial.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'nuevo',
        component: NuevoUsuarioComponent
    },
    {
        path: 'envio-mx',
        component: EnvioMxComponent
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
    {
        path: 'historial',
        component: HistorialComponent
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
