import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlanetsComponent } from './all-planets/all-planets.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  {
    path:'allPlanets',component:AllPlanetsComponent
  },
  {
    path:'favourites',component:FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
