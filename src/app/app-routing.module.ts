import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
    },
    {
    path: 'gallary',
    component: GalleryComponent
    },
    {
    path: 'login',
    component : LoginComponent
    },
     {
      path: 'register',
      component : RegisterComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

