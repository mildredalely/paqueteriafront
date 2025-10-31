import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LocationService } from './app/services/location.service';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  if(!navigator.geolocation){
    console.log('El dispositivo no admite geolocalización');
  }else{
    console.log('Localización activada');
    
  }