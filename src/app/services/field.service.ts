import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";

import { AppConf } from "../core/conf";

import alertify from "alertifyjs";

@Injectable({ providedIn: "root" })
export class FieldService {
  constructor(public router: Router, private http: HttpClient) {}

  uri = AppConf.server + AppConf.api.fields;

  private field = {
    name: "",
    address: "",
    tel: "",
    openFrom: "",
    openTo: ""
  };

  getAll() {
    return this.http.get(`${this.uri}/get`);
  }

  getById() {
    return this.http.get(`${this.uri}/id`);
  }

  add(field) {
    this.field = field;

    this.http.post(`${this.uri}/add`, this.field).subscribe(res => {
      alertify.success("Your added field successfully!");
      this.router.navigate(["/football-fields/all"]);
    });
  }

  edit(field) {
    this.field = field;

    this.http.post(`${this.uri}/edit`, this.field).subscribe(res => {
      alertify.success("Your edited field successfully!");
      // I have to find why this doesn't work
      this.router.navigate(["/football-fields/all"]);
    });
    // this.router.navigate(["/football-fields/all"]);
  }

  deleteField() {
    alertify.confirm(
      "Confirm Title",
      "Do you want to delete ?",
      () => {
        this.http.post(`${this.uri}/delete`, this.field).subscribe(res => {
          alertify.success("You deleted the field!");
          this.router.navigate(["/football-fields/all"]);
        });
      },
      function() {
        alertify.error("Cancel");
      }
    );

    // this.router.navigate(["/football-fields/all"]);
  }
}
