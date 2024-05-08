import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PlacesService } from '../../services';

import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit{

  public placesService = inject(PlacesService);

  @ViewChild('mapDiv') mapDivContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    if ( !this.placesService.userLocation ) throw Error('No se pudo conseguir la localizacion! :(');

    const map = new Map({
        container: this.mapDivContainer.nativeElement,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: this.placesService.userLocation,
        zoom: 13,
      });
  }
}
