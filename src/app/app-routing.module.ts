import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AboutComponent } from './movies/about/about.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path: 'header', component: HeaderComponent},
  { path: '',   redirectTo: '/newmovies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, 
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


