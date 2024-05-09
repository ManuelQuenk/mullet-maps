import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';

import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit{


  @ViewChild('mapDiv') mapDivContainer!: ElementRef;

  constructor(
    private placesService: PlacesService,
    private mapService   : MapService,
  ) {}

  ngAfterViewInit(): void {

    if ( !this.placesService.userLocation ) throw Error('No se pudo conseguir la localizacion! :(');

    const map = new Map({
        container: this.mapDivContainer.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: this.placesService.userLocation,
        zoom: 13,
      });

    const popup = new Popup()
     .setHTML(`
     <h6>Estoy aqui</h6>
     <span>En esta parte del mundo</span>
     `)

    new Marker({'color': "red"})
     .setLngLat(this.placesService.userLocation)
     .setPopup( popup )
     .addTo( map )

    this.mapService.setMap(map)

  }
}
