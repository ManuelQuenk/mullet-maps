import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {


  constructor(
    private placeService: PlacesService,
    private mapService  : MapService,
  ) {}

  public goToMyLocation() {

    if ( !this.mapService.isMapReady ) throw Error('No hay mapa disponible')
    if ( !this.placeService.userLocation ) throw Error('No se pudo acceder a la localizacion')

    this.mapService.flyTo( this.placeService.userLocation )

  }

}
