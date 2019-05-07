import { Component, OnInit } from '@angular/core';

import { Auth } from '../../../core/auth'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public auth: Auth
  ){}

  ngOnInit() {
  }

  register(registerForm) {
    this.auth.register(
      registerForm.value.firstName,
      registerForm.value.lastName,
      registerForm.value.email,
      registerForm.value.username,
      registerForm.value.password,
      registerForm.value.confirmPassword
    )
  }

}
