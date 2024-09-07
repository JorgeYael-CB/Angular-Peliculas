import { Component, Input } from '@angular/core';
import { ISelectorMultipleModeloDto } from './selectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  standalone: true,
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {
  @Input({required: true})
  Seleccionados!: ISelectorMultipleModeloDto[];

  @Input({required: true})
  NoSeleccionados!: ISelectorMultipleModeloDto[];

  seleccionar( elemento: ISelectorMultipleModeloDto, index: number ){
    this.Seleccionados.push(elemento);
    this.NoSeleccionados.splice(index , 1);
  }

  deSeleccionar( elemento: ISelectorMultipleModeloDto, index: number ){
    this.NoSeleccionados.push(elemento);
    this.Seleccionados.splice(index , 1);
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados = [];
  }

  deselccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
  }
}
