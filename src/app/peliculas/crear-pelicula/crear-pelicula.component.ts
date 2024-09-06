import { Component } from '@angular/core';
import { IPeliculaCreacionDto } from '../peliculas';
import { FormularioGeneroComponent } from "../../generos/formulario-genero/formulario-genero.component";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [FormularioGeneroComponent, FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  guardarCambios( pelicula: IPeliculaCreacionDto ){
    console.log(`Creando pelicula ${pelicula.titulo}`);
  }

}
