import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitesComponent } from './activites/activites.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogementsHomepageComponent } from './logements-homepage/logements-homepage.component';
import { TourismeComponent } from './tourisme/tourisme.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'logements-homepage', component: LogementsHomepageComponent },
  { path: 'tourisme', component: TourismeComponent },


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
