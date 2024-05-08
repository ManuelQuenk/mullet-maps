import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapFullPageComponent } from './pages/map-full-page/map-full-page.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MapFullPageComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapFullPageComponent,
  ]
})
export class MapsModule { }
