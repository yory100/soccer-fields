import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './components/user/registration/registration.component'
import { LoginComponent } from './components/user/login/login.component'

import { CreateComponent } from './components/football-fields/create/create.component'
import { EditComponent } from './components/football-fields/edit/edit.component'
import { AllComponent } from './components/football-fields/all/all.component'


import { ReservationsComponent } from './components/admin/reservations/reservations.component'

const routes: Routes = [
  { path: 'user/register', component: RegistrationComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'football-fields/create', component: CreateComponent },
  { path: 'football-fields/edit', component: EditComponent },
  { path: 'football-fields/all', component: AllComponent },
  { path: 'admin/reservations', component: ReservationsComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
