import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitesComponent } from './activites/activites.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogementsHomepageComponent } from './logements-homepage/logements-homepage.component';
import { DetailLogementComponent } from './logements-homepage/detail-logement/detail-logement.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'logements-homepage', component: LogementsHomepageComponent },
    { path: 'detail-logement', component: DetailLogementComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'about-us', component: AboutUsComponent },





  // Wildcard route for a 404 page
  /** Il faut que je génère une page 404 personalisée au site, cela permet une meilleure expérience utilisateur, et les robots Google semblent reconnaitre les pages 404 persos et donner des points dessus */
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
