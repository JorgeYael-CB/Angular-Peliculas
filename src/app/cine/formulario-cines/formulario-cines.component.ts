import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ICineCreacionDto } from '../cines';
import { MapaComponent } from "../../compartidos/componentes/mapa/mapa.component";
import { ICoordenada } from '../../compartidos/componentes/mapa/Coordenada';
import { AutocompleteActoresComponent } from "../../actores/autocomplete-actores/autocomplete-actores.component";

@Component({
  selector: 'app-formulario-cines',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MapaComponent, AutocompleteActoresComponent],
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit {

  ngOnInit(): void {
    if( this.modelo !== undefined ){
      this.form.patchValue(this.modelo);
      this.coordenadasIniciales.push({
        latitud: this.modelo.latitud,
        longitud: this.modelo.longitud,
      });
    }
  }

  @Input()
  modelo?: ICineCreacionDto;

  @Output()
  posteoFormulario = new EventEmitter<ICineCreacionDto>();

  coordenadasIniciales: ICoordenada[] = [];

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    latitud: new FormControl<number | null>(null, [Validators.required]),
    longitud: new FormControl<number | null>(null, [Validators.required]),
  })

  obtenerErrorCampoNombre(): string{
    const nombre = this.form.get('nombre');

    if (nombre?.hasError('required')) return 'El nombre es requerido';
    return '';
  }

  guardarCambios(){
    if( !this.form.valid ){
      return;
    }

    const cine = this.form.value as ICineCreacionDto;
    this.posteoFormulario.emit(cine);
  }

  coordenadaSeleccionada( coordenada: ICoordenada ){
    this.form.patchValue(coordenada);

    console.log('Coordenada seleccionada LAT: ' + coordenada.latitud);
    console.log('Coordenada seleccionada LNG: ' + coordenada.longitud);
    console.log('Coordenada seleccionada TXT: ' + coordenada.texto);
  }
}
