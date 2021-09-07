import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { MapComponent } from './map.component';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    // GoogleMapsModule,
  //   HttpClientModule,
  //   HttpClientJsonpModule,
  ],
  // expoerts: [GoogleMapsModule]
})
export class MapModule { }
