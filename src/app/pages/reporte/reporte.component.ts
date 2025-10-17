import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent { 
   reportes = [
    {
      empleado: 'Mildred',
      pedidos: 15,
      ingresos: 2500,
      salidas: 500,
      total: 2000
    },
    {
      empleado: 'Miriam',
      pedidos: 12,
      ingresos: 1800,
      salidas: 300,
      total: 1500
    },
    {
      empleado: 'Alely',
      pedidos: 20,
      ingresos: 1800,
      salidas: 420,
      total: 2500
    }
  ];

  get totalDia(): number {
    return this.reportes.reduce((acc, turno) => acc + turno.total, 0);
  }

  imprimir() {
    window.print();
  }

}
