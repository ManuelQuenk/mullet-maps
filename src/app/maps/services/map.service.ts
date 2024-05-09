import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;

  get isMapReady() {
    return !!this.map
  }

  public setMap( map: Map ): void {
    this.map = map;
  }

  public flyTo( coords: LngLatLike ): void {

    if ( !this.map ) throw Error('Error with Map')

    this.map.flyTo({
      center: coords,
      zoom  : 13,
    })
  }

}
