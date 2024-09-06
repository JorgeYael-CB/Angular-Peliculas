import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ICineCreacionDto } from '../cines';

@Component({
  selector: 'app-formulario-cines',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit {

  ngOnInit(): void {
    if( this.modelo !== undefined ){
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: ICineCreacionDto;

  @Output()
  posteoFormulario = new EventEmitter<ICineCreacionDto>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', [Validators.required]]
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

}
