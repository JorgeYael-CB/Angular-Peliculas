import { Component } from '@angular/core';
import { IndiceEntidadComponent } from "../../compartidos/componentes/indice-entidad/indice-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/provedores/provedores';
import { ActoresService } from '../actores.service';


@Component({
  selector: 'app-indice-actores',
  standalone: true,
  imports: [IndiceEntidadComponent],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: ActoresService}
  ]
})
export class IndiceActoresComponent {



}
