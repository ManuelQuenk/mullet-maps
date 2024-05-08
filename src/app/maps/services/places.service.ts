import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation: [number, number] | undefined;

  get isUserLocationReady() {
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation (): Promise<[number, number]> {

    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [ coords.longitude, coords.latitude ];
          resolve( this.userLocation );
        }
      ),
      ( err: Error ) => {
        alert('No se pudo obtener la localización');
        console.log(err);
        reject();
      }
    })
  };
}
