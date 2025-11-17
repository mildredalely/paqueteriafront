import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-historial',
  standalone: true,
  imports: [],
  templateUrl: './detalle-historial.component.html',
  styleUrl: './detalle-historial.component.css'
})
export class DetalleHistorialComponent {
  private route = inject(ActivatedRoute);
  envio: any;

  ngOnInit() {
    const index = Number(this.route.snapshot.paramMap.get('id'));
    // Aquí podrías obtener los datos desde un servicio, pero para empezar:
    const envios = JSON.parse(localStorage.getItem('envios') || '[]');
    this.envio = envios[index];
  }


}
