import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  envios = [
    {
      fecha: '25/sep/2023',
      remitente: {
        nombre: 'José Luis Gandarillas',
        direccion: 'Porfirio Díaz #24, San Pablo Huixtepec'
      },
      destinatario: {
        nombre: 'Miriam Belén Santiago',
        direccion: 'Alguna dirección de EU, Texas'
      },
      estado: 'Completado'
    },
    {
      fecha: '10/oct/2023',
      remitente: {
        nombre: 'María González López',
        direccion: 'Av. Juárez #156, Centro, Oaxaca'
      },
      destinatario: {
        nombre: 'Carlos Ramírez Torres',
        direccion: '123 Main Street, Los Angeles, California'
      },
      estado: 'Completado'
    },
    {
      fecha: '15/oct/2023',
      remitente: {
        nombre: 'Pedro Martínez Ruiz',
        direccion: 'Calle Morelos #89, Tlaxiaco, Oaxaca'
      },
      destinatario: {
        nombre: 'Ana Patricia Hernández',
        direccion: '456 Oak Avenue, Chicago, Illinois'
      },
      estado: 'Completado'
    }
  ];

  verEnvio(index: number) {
    console.log('Ver detalles del envío', this.envios[index]);
    // Aquí podrías navegar a una ruta de detalle o mostrar un modal
  }
}