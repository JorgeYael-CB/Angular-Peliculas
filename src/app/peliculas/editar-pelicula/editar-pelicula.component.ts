import { Component, Input, numberAttribute } from '@angular/core';
import { IPeliculaCreacionDto, IPeliculaDto } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { ISelectorMultipleModeloDto } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number;

  pelicula: IPeliculaDto = {
    id: 1,
    fechaLanzamiento: new Date('2018-07-25'),
    titulo: 'Moana',
    trailer: 'ABC',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
  };

  generosNoSeleccionados: ISelectorMultipleModeloDto[] = [
    {
      llave: 1,
      valor: 'Drama'
    },
    {
      llave: 1,
      valor: 'Accion'
    },
  ];

  generosSeleccionados: ISelectorMultipleModeloDto[] = [
    {
      llave: 1,
      valor: 'Comedia'
    },
  ];

  guardarCambios( pelicula: IPeliculaCreacionDto ){
    console.log('Editando la pelicula: ' + pelicula.titulo);
  }
}
