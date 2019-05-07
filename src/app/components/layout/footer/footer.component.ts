import { Component, OnInit } from '@angular/core';

import { Auth } from '../../../core/auth'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public auth: Auth
  ) { }


  ngOnInit() {
  }
  logOut() {
    this.auth.logout()
  }

}
