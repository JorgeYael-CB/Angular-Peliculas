import { Component, Input, numberAttribute } from '@angular/core';
import { ICineCreacionDto, ICineDto } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;
  cine: ICineDto = {id: 1, nombre: 'Acropolis',
    latitud: 19.335555669023176, longitud: -99.1570706461639}

  guardarCambios( cine: ICineCreacionDto ){
    console.log('Cine: ' + cine.nombre);
  }
}
