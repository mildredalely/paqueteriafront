import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {

   efectivoCaja: number | null = null;
   totalEsperado: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.totalEsperado = Number(localStorage.getItem('totalDia')) || 0;
  }

  cerrarTurno() {
    if (this.efectivoCaja === this.totalEsperado) {
      alert(' Cantidad correcta. Imprimiendo reporte...');
      window.print(); 
      this.router.navigate(['/reporte']);
    } else {
      alert(' El efectivo no coincide con el total del día.');
    }
  }

}
