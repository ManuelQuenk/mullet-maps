import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places-response';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation:    [number, number] | undefined;
  public isLoadingPlaces: boolean = false;
  public places:          Feature[] = []

  get isUserLocationReady() {
    return !!this.userLocation;
  }

  constructor(
    private http: HttpClient,
  ) {
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

  getPlacesByQuery( query: string ) {

    this.isLoadingPlaces = true;

    return this.http.get<PlacesResponse>(`https://api.mapbox.com/search/geocode/v6/forward?q=${query}&proximity=-64.23738585247824%2C-31.34096637708827&language=es&access_token=pk.eyJ1IjoibXVsbGV0bWFudSIsImEiOiJjbHVzaWp3Z3EwajE5Mmpua3Y1Nm00NWIzIn0.BXH02qD27MpXTxHmKUcGfQ`)
     .subscribe( (res) => {
        this.isLoadingPlaces = false;
        this.places = res.features;
     })
  }

}
