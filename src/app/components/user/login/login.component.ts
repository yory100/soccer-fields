import { Component, OnInit } from '@angular/core';

import { Auth } from '../../../core/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: Auth
  ){}

  ngOnInit() {
  }

  login(loginForm) {
    this.auth.login(loginForm.value.username, loginForm.value.password)
  }

}
