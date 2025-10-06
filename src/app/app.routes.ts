import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
