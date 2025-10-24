import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EnvioMxComponent } from './pages/envio-mx/envio-mx.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
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
        path: 'reporte',
        component: ReporteComponent
    },
    {
        path: 'historial',
        component: HistorialComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
