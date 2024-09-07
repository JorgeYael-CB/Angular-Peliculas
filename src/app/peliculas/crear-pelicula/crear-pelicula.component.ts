import { Component } from '@angular/core';
import { IPeliculaCreacionDto } from '../peliculas';
import { FormularioGeneroComponent } from "../../generos/formulario-genero/formulario-genero.component";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { ISelectorMultipleModeloDto } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [FormularioGeneroComponent, FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: ISelectorMultipleModeloDto[] = [
    {
      llave: 1,
      valor: 'Comedia'
    },
    {
      llave: 1,
      valor: 'Drama'
    },
    {
      llave: 1,
      valor: 'Accion'
    },
  ];

  generosNoSeleccionados: ISelectorMultipleModeloDto[] = [];

  guardarCambios( pelicula: IPeliculaCreacionDto ){
    console.log(`Creando pelicula ${pelicula.titulo}`);
  }

}
