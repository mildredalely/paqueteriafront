import { Routes } from '@angular/router';
import { HistorialComponent } from './pages/historial/historial.component';

export const routes: Routes = [
    {
        path: 'historial',
        component: HistorialComponent
    },
    // Optional: home redirect
    {
        path: '',
        redirectTo: 'historial',
        pathMatch: 'full'
    },
    // Wildcard fallback
    {
        path: '**',
        redirectTo: 'historial'
    }
];
