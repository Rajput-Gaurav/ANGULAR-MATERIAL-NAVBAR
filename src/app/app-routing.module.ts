
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';

// import Components:
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


// create a routes:
const routes : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
