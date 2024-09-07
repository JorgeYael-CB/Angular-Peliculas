import { Component, Input, numberAttribute } from '@angular/core';
import { IPeliculaCreacionDto, IPeliculaDto } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { ISelectorMultipleModeloDto } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { IActorAutocompleteDto } from '../../actores/actores';

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

  cinesSeleccionados: ISelectorMultipleModeloDto[] = [
    {
      llave: 1,
      valor: 'Cinemex'
    }
  ];

  cinesNoSeleccionados: ISelectorMultipleModeloDto[] = [
    {
      llave: 1,
      valor: 'OtroCine'
    },
    {
      llave: 1,
      valor: 'Blue Mall'
    },
  ];

  actoresSeleccionados:IActorAutocompleteDto[] = [
    {
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg',
      personaje: 'Petter Parker',
      id: 1,
      nombre: 'Tom Holland'
    },
  ];

  guardarCambios( pelicula: IPeliculaCreacionDto ){
    console.log('Editando la pelicula: ' + pelicula.titulo);
  }
}
