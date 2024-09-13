import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/provedores/provedores';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [FormularioActoresComponent, MostrarErroresComponent, CrearEntidadComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: ActoresService}
  ]
})
export class CrearActorComponent {

  formulario = FormularioActoresComponent;

}
