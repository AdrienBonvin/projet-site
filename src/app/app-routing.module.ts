import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitesComponent } from './activites/activites.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogementsHomepageComponent } from './logements-homepage/logements-homepage.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { CampingCarComponent } from './logements-homepage/camping-car/camping-car.component';
import { GiteComponent } from './logements-homepage/gite/gite.component';
import { InsoliteComponent } from './logements-homepage/insolite/insolite.component';
import { DomaineHomepageComponent } from './domaine-homepage/domaine-homepage.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'domaine-homepage', component: DomaineHomepageComponent },
  { path: 'logements-homepage', component: LogementsHomepageComponent },
    { path: 'camping-car', component: CampingCarComponent },
    { path: 'gite', component: GiteComponent },
    { path: 'insolite', component: InsoliteComponent },




  // Wildcard route for a 404 page
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { scrollPositionRestoration: 'enabled' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
