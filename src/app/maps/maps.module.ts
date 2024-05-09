import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapFullPageComponent } from './pages/map-full-page/map-full-page.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [
    MapFullPageComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    AngularLogoComponent,
    SearchBoxComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MapFullPageComponent,
  ]
})
export class MapsModule { }
