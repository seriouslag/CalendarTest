import {RouterModule, Routes} from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

export const routing = RouterModule.forRoot(routes);
