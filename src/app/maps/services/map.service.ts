import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places-response';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private markers: Marker[] = []
  private map?: Map;

  get isMapReady() {
    return !!this.map
  }

  public setMap( map: Map ): void {
    this.map = map;
  }

  public flyTo( coords: LngLatLike ): void {

    if ( !this.map ) throw Error('Error no Map');

    this.map.flyTo({
      center: coords,
      zoom  : 13,
    });
  }

  public createMarkersFromPlaces( places: Feature[], userLocation: [number, number] ) {
    if (!this.map) throw Error('Error no map');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.geometry.coordinates;
      const popup = new Popup()
       .setHTML(`
        <h6>${place.properties.name}</h6>
        <span>${place.properties.full_address}</span>
       `)
      const newMarker = new Marker()
       .setLngLat([lng, lat])
       .setPopup(popup)
       .addTo(this.map)

      newMarkers.push( newMarker );
    }

    this.markers = newMarkers;

    if (places.length === 0) return;
    const bounds = new LngLatBounds();

    newMarkers.forEach( marker => bounds.extend( marker.getLngLat() ));

    bounds.extend(userLocation)

    this.map.fitBounds(bounds, {
      padding: 200
    });
  }
}
