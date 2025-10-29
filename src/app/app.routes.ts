import { Routes } from '@angular/router';
import { HistorialComponent } from './pages/historial/historial.component';

export const routes: Routes = [
    {
        path: 'historial',
        component: HistorialComponent
    },
    {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./pages/detalle-historial/detalle-historial.component')
        .then(m => m.DetalleHistorialComponent)
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
    },
    
];
