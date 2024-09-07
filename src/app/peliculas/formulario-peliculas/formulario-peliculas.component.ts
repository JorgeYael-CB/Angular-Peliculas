import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { IPeliculaCreacionDto, IPeliculaDto } from '../peliculas';
import moment from 'moment';
import { ISelectorMultipleModeloDto } from '../../compartidos/componentes/selector-multiple/selectorMultipleModelo';
import { SelectorMultipleComponent } from "../../compartidos/componentes/selector-multiple/selector-multiple.component";
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";
import { IActorAutocompleteDto } from '../../actores/actores';


@Component({
  selector: 'app-formulario-peliculas',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink,
    MatDatepickerModule, InputImgComponent, SelectorMultipleComponent, AutocompleteActoresComponent],

  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit {

  ngOnInit(): void {
    if( this.modelo ){
      this.form.patchValue( this.modelo );
    }
  }

  @Input({required: true})
  actoresSeleccionados!: IActorAutocompleteDto[];

  @Input({required: true})
  generosNoSeleccionados!: ISelectorMultipleModeloDto[];

  @Input({required: true})
  generosSeleccionados!: ISelectorMultipleModeloDto[];

  @Input({required: true})
  cinesNoSeleccionados!: ISelectorMultipleModeloDto[];

  @Input({required: true})
  cinesSeleccionados!: ISelectorMultipleModeloDto[];


  @Input()
  modelo?: IPeliculaDto;

  @Output()
  posteoFormulario = new EventEmitter<IPeliculaCreacionDto>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: ['', Validators.required],
    fechaLanzamiento: [new FormControl<Date | null>(null), Validators.required],
    trailer: [''],
    poster: new FormControl<File | string | null>(null),
  });

  archivoSeleccionado(file: File){
    this.form.controls.poster.setValue( file );
  }

  guardarCambios(){
    if( !this.form.valid ) return;

    const pelicula = this.form.value as IPeliculaCreacionDto;
    pelicula.fechaLanzamiento = moment( pelicula.fechaLanzamiento ).toDate();

    const generosIds = this.generosNoSeleccionados.map(valor => valor.llave);
    pelicula.generosIds = generosIds;

    const cinesIds = this.cinesSeleccionados.map( val => val.llave );
    pelicula.cinesIds = cinesIds;

    pelicula.actores = this.actoresSeleccionados;

    this.posteoFormulario.emit( pelicula );
  }

  obtenerErrorTitulo(): string{
    const campo = this.form.controls.titulo;
    if( campo.hasError('required') ) return 'El campo titulo es requerido';

    return '';
  }

  obtenerErrorFechaLanzamiento(): string{
    const campo = this.form.controls.fechaLanzamiento;
    if( campo.hasError('required') ) return 'El campo fechaLanzamiento es requerido';

    return '';
  }
}
