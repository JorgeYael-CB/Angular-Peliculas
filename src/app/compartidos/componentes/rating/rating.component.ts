import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, numberAttribute, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  // Funciones transformadoras
  @Input({required: true, transform: ( value: number ) => Array(value).fill(0) })
  maximoRating!: number[];

  @Input({required: false})
  ratingSeleccionado: number = 0;

  @Output()
  votado = new EventEmitter<number>();

  ratingAnterior: number = 0;

  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(): void{
    if( this.ratingAnterior !== 0 ){
      this.ratingSeleccionado = this.ratingAnterior;
    }else {
      this.ratingSeleccionado = 0;
    }
  }

  manejarClick(index: number): void{
    this.ratingSeleccionado = index + 1;
    this.ratingAnterior = this.ratingSeleccionado;

    this.votado.emit(this.ratingSeleccionado);
  }
}
