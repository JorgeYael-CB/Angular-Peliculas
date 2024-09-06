import { Routes } from '@angular/router';
import { LandinPageComponent } from './landin-page/landin-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cine/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cine/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarCineComponent } from './cine/editar-cine/editar-cine.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';

export const routes: Routes = [
  { path: "", component: LandinPageComponent },
  { path: "generos", component: IndiceGenerosComponent },
  { path: "generos/crear-genero", component: CrearGenerosComponent },
  { path: "actores", component: IndiceActoresComponent },
  { path: "actores/crear", component: CrearActorComponent },
  { path: "cines", component: IndiceCinesComponent },
  { path: "cines/crear", component: CrearCineComponent },
  { path: "peliculas/crear", component: CrearPeliculaComponent },
  { path: "generos/editar/:id", component: EditarGeneroComponent }, // parametros en la URL
  { path: "actores/editar/:id", component: EditarActorComponent }, // parametros en la URL
  { path: "peliculas/editar/:id", component: EditarPeliculaComponent }, // parametros en la URL
  { path: "cines/editar/:id", component: EditarCineComponent }, // parametros en la URL
  { path: 'peliculas/filtrar', component: FiltroPeliculasComponent },
  { path: "**", redirectTo: "" } // atrapalo-todo
];
