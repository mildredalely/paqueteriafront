import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EnvioMxComponent } from './pages/envio-mx/envio-mx.component';

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
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
