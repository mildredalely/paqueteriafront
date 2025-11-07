import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, RouterLink],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

}
