import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IActorAutocompleteDto } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actores: IActorAutocompleteDto[] = [
    {
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg',
      personaje: '',
      id: 1,
      nombre: 'Tom Holland'
    },
    {
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg',
      personaje: '',
      id: 1,
      nombre: 'Tom Hanks'
    },
    {
      foto: 'https://es.web.img2.acsta.net/pictures/15/07/27/12/24/354255.jpg',
      personaje: '',
      id: 2,
      nombre: 'Samuel I. Jackson'
    },
  ];

  actoresSeleccionados: IActorAutocompleteDto[] = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable)
  table!: MatTable<IActorAutocompleteDto>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if( this.table ){
      this.table.renderRows();
    }
  }

  eliminar(actor: IActorAutocompleteDto){
    this.actoresSeleccionados = this.actoresSeleccionados.filter( a => a.id !== actor.id );
  }
}
