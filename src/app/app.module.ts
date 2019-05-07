import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { CreateComponent } from './components/football-fields/create/create.component';
import { EditComponent } from './components/football-fields/edit/edit.component';
import { ReservationsComponent } from './components/admin/reservations/reservations.component';
import { AllComponent } from './components/football-fields/all/all.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    ReservationsComponent,
    AllComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
