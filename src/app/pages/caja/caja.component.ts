import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReporteComponent } from '../reporte/reporte.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {

  efectivoCaja: number | null = null;
  totalEsperado: number = 0;
  correo: string = ''; 

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
   
    this.totalEsperado = Number(localStorage.getItem('totalDia')) || 0;
  }

  
  enviarCorreo() {
    if (this.efectivoCaja === null) {
      alert('Por favor ingresa la cantidad en caja.');
      return;
    }

    if (this.efectivoCaja !== this.totalEsperado) {
      alert('El efectivo no coincide con el total del día.');
      return;
    }

    if (!this.correo) {
      alert('Por favor ingresa un correo de destino.');
      return;
    }

    const datosCorreo = {
      correo: this.correo,
      totalDia: this.totalEsperado,
      efectivoCaja: this.efectivoCaja,
      mensaje: `Cierre de caja correcto. Total del día: $${this.totalEsperado}.`
    };

   
    /*this.http.post('http://tu-servidor.com/api/enviar-reporte', datosCorreo)
      .subscribe({
        next: () => {
          alert('Reporte enviado correctamente al correo.');
          this.router.navigate(['/reporte']);
        },
        error: (err) => {
          console.error('Error al enviar el correo:', err);
          alert('Ocurrió un error al enviar el correo.');
        }
      });*/
  }

  
  cerrarTurno() {
    this.enviarCorreo();
  }
}