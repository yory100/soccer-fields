import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegistrationComponent } from "./components/user/registration/registration.component";
import { LoginComponent } from "./components/user/login/login.component";

import { CreateComponent } from "./components/football-fields/create/create.component";
import { EditComponent } from "./components/football-fields/edit/edit.component";
import { AllComponent } from "./components/football-fields/all/all.component";

import { ReservationsComponent } from "./components/admin/reservations/reservations.component";
import { WellcomeComponent } from "./components/wellcome/wellcome.component";

import { AdminGuard } from "./guards/admin.guard";
import { LoggedGuard } from "./guards/logged.guard";

const routes: Routes = [
  { path: "", component: WellcomeComponent },

  {
    path: "user/register",
    component: RegistrationComponent,
    canActivate: [LoggedGuard]
  },
  { path: "user/login", component: LoginComponent, canActivate: [LoggedGuard] },
  {
    path: "football-fields/create",
    component: CreateComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "football-fields/edit/:id",
    component: EditComponent,
    canActivate: [AdminGuard]
  },
  // { path: "football-fields/edit", component: EditComponent },
  { path: "football-fields/all", component: AllComponent },
  {
    path: "admin/reservations",
    component: ReservationsComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
