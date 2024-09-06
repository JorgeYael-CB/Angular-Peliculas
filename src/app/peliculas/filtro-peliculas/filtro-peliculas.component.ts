import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { IFiltroPelicula } from './filtroPelicula';

@Component({
  selector: 'app-filtro-peliculas',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {

  ngOnInit(): void {
    // Escuchar eventos del formulario
    this.form.valueChanges.subscribe( valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as IFiltroPelicula);
    });
  }

  buscarPeliculas( valores: IFiltroPelicula ){
    if( valores.titulo ){
      this.peliculas = this.peliculas
        .filter( p => p.titulo.toLowerCase().indexOf(valores.titulo.toLocaleLowerCase()) !== - 1 );
    }

    if( valores.generoId !== 0 ){
      this.peliculas = this.peliculas
        .filter( p => p.generos.indexOf(valores.generoId) !== -1 );
    }

    if( valores.proximosEstrenos ){
      this.peliculas = this.peliculas
        .filter( p => p.proximosEstrenos );
    }

    if( valores.enCines ){
      this.peliculas = this.peliculas
        .filter( p => p.enCines );
    }
  }

  limpiar(){
    this.form.patchValue({enCines: false, generoId: 0, proximosEstrenos: false, titulo: undefined});
  }

  private formBuilder = inject(FormBuilder);

  peliculasOriginal = [
    {
      titulo: 'Inside Out 2',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      generos: [1, 2 , 3],
      enCines: true,
      proximosEstrenos: false,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
    },
    {
      titulo: 'Moana 2',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [1],
      enCines: false,
      proximosEstrenos: true,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
    },
    {
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [3],
      enCines: true,
      proximosEstrenos: false,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
    },
    {
      titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [],
      enCines: true,
      proximosEstrenos: false,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
    },
    {
      titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [1, 3],
      enCines: false,
      proximosEstrenos: true,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
    },
    {
      titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      generos: [2 , 3],
      enCines: true,
      proximosEstrenos: false,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
  }];

  peliculas = this.peliculasOriginal;

  form = this.formBuilder.group({
    titulo: [''],
    generoId: [0],
    proximosEstrenos: [false],
    enCines: [false],
  });

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Accion'},
    {id: 3, nombre: 'Comedia'},
  ]


}
