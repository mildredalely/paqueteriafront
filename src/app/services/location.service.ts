import { Injectable } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  public userLocation? : [number, number];

  get locationReady(): boolean{
    return !!this.userLocation;
  }

  constructor() { 
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]>{
    return new Promise((resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve(this.userLocation)
          console.log(this.userLocation);
          
        },
        (err)=>{
          alert('No se pudieron obtener los datos de la uicación')
          console.log(err);
          reject();
        } 
      );
      // watchPosition sirve para ver la ubicación conforme se mueve el usuario
      // navigator.geolocation.watchPosition
    })
  }
}
