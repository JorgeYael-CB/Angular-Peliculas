import { Component, Input, numberAttribute } from '@angular/core';
import { ICineCreacionDto } from '../cines';
import { FormularioActoresComponent } from "../../actores/formulario-actores/formulario-actores.component";
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-crear-cine',
  standalone: true,
  imports: [FormularioActoresComponent, FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
  guardarCambios(cine: ICineCreacionDto){
    console.log("name: " + cine.nombre);
  }
}
