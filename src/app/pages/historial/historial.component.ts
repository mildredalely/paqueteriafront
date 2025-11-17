import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Envio {
  fecha: string;
  remitente: {
    nombre: string;
    direccion: string;
  };
  destinatario: {
    nombre: string;
    direccion: string;
  };
  estado: string;
  productos?: {
    nombre: string;
    cantidad: number;
    peso: number;
    fragil: boolean;
  }[];
}

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  router = inject(Router);

  envios: Envio[] = [
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
      estado: 'Completado',
      productos: [
        { nombre: 'Producto 1', cantidad: 8, peso: 4, fragil: true },
        { nombre: 'Producto 2', cantidad: 2, peso: 1, fragil: false }
      ]
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
    localStorage.setItem('envios', JSON.stringify(this.envios)); // temporal
    this.router.navigate(['/detalle', index]);
  }
}