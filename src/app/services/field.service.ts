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

  add(field) {
    this.field = field;
    console.log(this.uri);

    this.http.post(`${this.uri}/add`, this.field).subscribe(res => {
      alertify.success("Your added field successfully!");
      this.router.navigate(["/"]);
    });
  }
}
