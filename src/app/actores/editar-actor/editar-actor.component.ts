import { Component, Input, numberAttribute } from '@angular/core';
import { IActorCreacionDTO, IActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!: number;

  actor: IActorDTO = {
    id: 1,
    nombre: 'Tom Holland',
    fechaNacimiento: new Date('1991-01-25'),
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/800px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'
  }

  guardarCambios(actor: IActorCreacionDTO){
    console.log("name: " + actor.nombre);
    console.log("foto: " + actor.foto);
    console.log("date" + actor.fechaNacimiento);
  }
}
