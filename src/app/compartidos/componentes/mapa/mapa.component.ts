import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { ICoordenada } from './Coordenada';


@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map( v => {
      const marcador = marker([v.latitud, v.longitud], this.markerOptions);

      return marcador;
    })
  }


  markerOptions:MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }

  @Input()
  coordenadasIniciales: ICoordenada[] = [];

  @Output()
  coordenadaSeleccionada = new EventEmitter<ICoordenada>();

  // Configuracion del mapa
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 14,
    center: latLng(19.33423631467333, -99.17683518473986)
  }

  capas: Marker<any>[] = [];

  manejarClick(evento: LeafletMouseEvent){
    const latitud = evento.latlng.lat;
    const longitud = evento.latlng.lng;

    this.capas = [];
    this.capas.push(marker([latitud, longitud], this.markerOptions));
    this.coordenadaSeleccionada.emit({ latitud, longitud });
  }

}
