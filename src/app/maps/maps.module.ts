import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapFullPageComponent } from './pages/map-full-page/map-full-page.component';



@NgModule({
  declarations: [
    MapFullPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapFullPageComponent,
  ]
})
export class MapsModule { }
